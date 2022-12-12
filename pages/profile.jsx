import React, { useEffect } from "react";
import { useUserAuth, onAuthStateChanged } from "../context/UserAuthContext";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import firebase from "../firebase/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { createCheckoutSession } from "../stripe/createCheckoutSession";
import { createCheckoutSessionStandard } from "../stripe/createCheckoutSessionStandard";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from '../firebase/firebaseApp'
import usePremiumStatus from "../stripe/usePremiumStatus";


const Profile = () => {
  const { currentUser, logOut } = useUserAuth();
  const auth = useUserAuth();
  const router = useRouter();
  const premiumStatus = usePremiumStatus(currentUser)

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
  }, [auth.user]);
 
let premiumUser = collection(db, `users/currentUser.uid/subscriptions`)
     const q = query(premiumUser, where("status", "==", ["trailing", "active"]))
    onSnapshot(q, async (snapshot) => {
      const doc = snapshot.docs
    })

  return (
    <div className="pt-36 w-full flex flex-col items-center">
      <h1 className="text-center text-6xl font-bold mb-8">Hello Welcome</h1>
      <h1 className="text-center mb-4">{currentUser?.displayName}</h1>
      <h1 className="text-center mb-4">{currentUser?.email}</h1>

     {!premiumStatus ? <button
        className="rounded-lg bg-[#BF202F] text-white my-4 px-4 py-2"
        onClick={() => createCheckoutSession(currentUser.uid)}
      >
        Upgrade to premium package
      </button>: <h1>Hi premium user</h1>}
     
      <button
        className="rounded-lg bg-[#BF202F] text-white my-4 px-4 py-2"
        onClick={() => createCheckoutSessionStandard(currentUser.uid)}
      >
        Upgrade to standard package
      </button>
       
      <button
        className="rounded-lg bg-[#BF202F] text-white my-4 px-4 py-2"
        onClick={handleLogOut}
      >
        Logout
      </button>
       
      {premiumStatus ? <h1>Hi Premium User</h1>: <h1>Become premium today</h1>}
    </div>
  );
};

export default Profile;
