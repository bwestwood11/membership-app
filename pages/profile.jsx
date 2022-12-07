import React, { useEffect } from "react";
import { useUserAuth, onAuthStateChanged } from "../context/UserAuthContext";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import firebase from '../firebase/firebaseApp'
import { useAuthState } from 'react-firebase-hooks/auth'
import { createCheckoutSession } from "../stripe/createCheckoutSession";

const Profile = () => {
  const { user, logOut } = useUserAuth();
  const auth = useUserAuth();
  const router = useRouter()
  


  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (!auth.user) {
      router.replace("/loginerror")
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.user])
  

  return (
    <div className="pt-36 w-full flex flex-col">
      <div>
        <h1 className="text-center text-6xl font-bold">Hello Welcome</h1>
      </div>
     <h1 className="text-center">{user?.displayName}</h1>
     <h1 className="text-center">{user?.name}</h1>
     <h1 className="text-center">{user?.email}</h1>
    
      <button onClick={() => createCheckoutSession(user.uid)}>
        Upgrade to premium
      </button>
    

      <button
        className="text-xl w-full bg-[#BF202F] text-white py-3 rounded-lg hover:scale-110 ease-in duration-300"
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
};

export default (Profile);
