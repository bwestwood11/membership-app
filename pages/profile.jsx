import React, { useEffect } from "react";
import { useUserAuth } from "../context/UserAuthContext";


import { useRouter } from "next/router";

const Profile = () => {
  const { children } = useUserAuth();
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
      router.replace("/login")
    } else {null}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.user])
  


  return (
    <div className="pt-36 w-full">
      <div>
        <h1 className="text-center text-6xl font-bold">Hello Welcome</h1>
      </div>
      <button
        className="justify-center text-xl bg-[#BF202F] text-white py-3 px-3 rounded-lg hover:scale-110 ease-in duration-300"
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
};

export default (Profile);
