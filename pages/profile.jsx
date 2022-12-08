import React, { useEffect } from "react";
import { useUserAuth, onAuthStateChanged } from "../context/UserAuthContext";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import firebase from "../firebase/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { createCheckoutSession } from "../stripe/createCheckoutSession";
import { createCheckoutSessionStandard } from "../stripe/createCheckoutSessionStandard";

const Profile = () => {
  const { user, logOut } = useUserAuth();
  const auth = useUserAuth();
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (!auth.user) {
      router.replace("/loginerror");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.user]);

  return (
    <div className="pt-36 w-full flex flex-col items-center">
      <h1 className="text-center text-6xl font-bold mb-8">Hello Welcome</h1>
      <h1 className="text-center mb-4">{user?.displayName}</h1>
      <h1 className="text-center mb-4">{user?.email}</h1>

      <button
        className="rounded-lg bg-[#BF202F] text-white my-4 px-4 py-2"
        onClick={() => createCheckoutSession(user.uid)}
      >
        Upgrade to premium package
      </button>
      <button
        className="rounded-lg bg-[#BF202F] text-white my-4 px-4 py-2"
        onClick={() => createCheckoutSessionStandard(user.uid)}
      >
        Upgrade to standard package
      </button>

      <button
        className="rounded-lg bg-[#BF202F] text-white my-4 px-4 py-2"
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
