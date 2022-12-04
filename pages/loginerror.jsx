import Link from "next/link";
import React from "react";

const Loginerror = () => {
  return (
    <div className="pt-28 flex w-full flex-col items-center">
      <h1 className="text-center text-4xl pb-8">
        Must be Logged in to access your account information.
      </h1>
      <Link href="/login">
        <button className="rounded-lg bg-[#BF202F] text-white my-4 px-4 py-2">
          Log In Here
        </button>
      </Link>
     <Link href="/signup">
        <button className="rounded-lg bg-[#BF202F] text-white my-4 px-4 py-2">
          Sign Up Here
        </button>
      </Link>       
    </div>
  );
};

export default Loginerror;
