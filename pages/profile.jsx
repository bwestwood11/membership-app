import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { withProtected } from "../hooks/hook";

const Profile = () => {
  const { user, logOut } = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };


  return (
    <div className="pt-36 w-full">
      <div>
        <h1 className="text-center text-6xl font-bold">Hello Welcome</h1>
        <p className="text-center">{user.displayName}</p>
        <p className="text-center">{user.email}</p>
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

export default withProtected(Profile);
