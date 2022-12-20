import React, { useEffect, useState } from "react";
import { useUserAuth, onAuthStateChanged } from "../context/UserAuthContext";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import firebase from "../firebase/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { createCheckoutSession } from "../stripe/createCheckoutSession";
import { createCheckoutSessionStandard } from "../stripe/createCheckoutSessionStandard";
import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebaseApp";
import usePremiumStatus from "../stripe/usePremiumStatus";
import Loader from "../components/Loader";
import { loadStripe } from "@stripe/stripe-js";

const Profile = () => {
  const { currentUser, logOut } = useUserAuth();
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState(null);
  const [products, setProducts] = useState([]);
  const auth = useUserAuth();
  const router = useRouter();
  const premiumStatus = usePremiumStatus(currentUser);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (!auth.currentUser) {
      router.replace("/loginerror");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.currentUser]);

  useEffect(() => {
    const getSubscriptions = async () => {
      const ref = collection(db, `users/${currentUser.uid}/subscriptions`);
      const snapshot = await getDocs(ref);
      snapshot.forEach((subscription) => {
        setSubscription({
          role: subscription.data().role,
          current_period_end: subscription.data().current_period_end.seconds,
          current_period_start:
            subscription.data().current_period_start.seconds,
        });
      });
      // if (snapshot.empty) {
      //   console.log("no documents exist in the 'subscriptions' subcollection.");
      //   return [];
      // } else {
      //   const subscriptions = snapshot.docs.map((doc) => doc.data());
      //   console.log(
      //     `${subscriptions.length} documents found in the 'subscriptions' subcollection.`
      //   );
      //   return subscriptions;
      // }
    };
    getSubscriptions();
  }, [currentUser]);

  console.log(subscription);

  useEffect(() => {
    const getActiveProducts = async () => {
      let productsCollRef = collection(db, "products");
      let q = query(productsCollRef, where("active", "==", true));

      let querySnapshot = await getDocs(q);
      const products = {};

      for (let i = 0; i < querySnapshot.size; i++) {
        let productDocSnap = querySnapshot.docs[i];
        products[productDocSnap.id] = productDocSnap.data();

        let pricesCollRef = collection(productDocSnap.ref, "prices");
        const pricesSnap = await getDocs(pricesCollRef);

        pricesSnap.docs.forEach((priceDocSnap) => {
          products[productDocSnap.id].prices = {
            priceId: priceDocSnap.id,
            priceData: priceDocSnap.data(),
          };
        });
      }

      setProducts(products);
    };

    getActiveProducts();
  }, []);

  console.log(products);

  const loadCheckout = async (priceId) => {
    let docRef = await collection(
      db,
      `users/${currentUser.uid}/checkout_sessions`
    );
    const checkoutSessionRef = await addDoc(docRef, {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    onSnapshot(checkoutSessionRef, async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert(`An error-occurred: ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_BtvHXje9566mPGPMtvzsfgBc00gs4p7FDL"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className=" pt-28 flex flex-col gap-8 justify-between p-20">
      <h1>Welcome {currentUser.email}</h1>
      <a href="https://billing.stripe.com/p/login/test_fZebJx6J4gCh5CE8ww">
        <button className="text-s text-white bg-[#BF202F] px-5 py-3 border-none rounded-lg">
          Manage your account
        </button>
      </a>
      <br />
      {subscription && (
        <p className="font-bold">
          Renewal Date:{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        // add some logic to check if user's subscription is active...
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);
        return (
          <div key={productId}>
            <div className="plansScreen__info">
              <h5 className="text-xl font-bold pb-4">{productData.name}</h5>
              <h6 className="text-lg pb-2">{productData.description}</h6>
            </div>
            <button
              className={
                isCurrentPackage
                  ? "bg-green-800 text-white px-5 py-3 rounded-lg border-none"
                  : "text-s text-white bg-[#BF202F] px-5 py-3 border-none rounded-lg"
              }
              onClick={() =>
                !isCurrentPackage && loadCheckout(productData.prices.priceId)
              }
            >
              {isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
