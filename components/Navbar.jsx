import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../public/images/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useUserAuth, onAuthStateChanged } from "../context/UserAuthContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const { currentUser, logOut } = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <nav className="fixed w-full h-20 shadow-xl bg-white z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={logo}
            alt="/"
            className="cursor-pointer"
            width="75"
            height="75"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 uppercase hover:border-b text-xl">Home</li>
            </Link>
            <Link href="/pricing">
              <li className="ml-10 uppercase hover:border-b text-xl">Pricing</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Contact
              </li>
            </Link>
            <Link href="/profile">
              <li className="ml-10 uppercase hover:border-b text-xl">
                My Profile
              </li>
            </Link>
          </ul>
        </div>
        <div>
          {currentUser ? (
            <div className="flex flex-row">
            <button
              onClick={handleLogOut}
              className="hidden md:flex mr-10 text-xl bg-[#BF202F] text-white py-3 px-3 rounded-lg hover:scale-110 ease-in duration-300"
            >
              Logout
            </button>
            <a href="https://billing.stripe.com/p/login/test_fZebJx6J4gCh5CE8ww">
            <button className="hidden md:flex mr-10 text-xl bg-[#BF202F] text-white py-3 px-3 rounded-lg hover:scale-110 ease-in duration-300">
               Manage Account
            </button>
            </a>
            </div>
          ) : (
            <Link href="/login">
              <button className="hidden sm:flex mr-10 text-xl bg-[#BF202F] text-white py-3 px-3 rounded-lg hover:scale-110 ease-in duration-300">
                Log In
              </button>
            </Link>
          )}
        </div>
        <div onClick={handleNav} className="md:hidden mr-4 cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <Image
                src={logo}
                alt="/"
                className="cursor-pointer"
                width="75"
                height="75"
              />
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="border-b border-gray-300 my-12">
            <p> Subscribe to our YouTube Channel</p>
            <a
              href="https://www.youtube.com/channel/UCXRaNufTL_ez75DOzHtMMXQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-lg bg-[#BF202F] text-white my-4 px-4 py-2 hover:scale-110 ease-in duration-300">
                Subscribe
              </button>
            </a>
          </div>
          <div className="flex-col py-4">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4">
                  Home
                </li>
              </Link>
              <Link href="/pricing">
                <li onClick={() => setNav(false)} className="py-4">
                  Pricing
                </li>
              </Link>
              <Link href="/contact">
                <li onClick={() => setNav(false)} className="py-4">
                  Contact
                </li>
              </Link>
              {currentUser && 
              <Link href="/profile">
                <li onClick={() => setNav(false)} className="py-4">
                  My Profile
                </li>
              </Link> }
            </ul>
          </div>
          <div className="py-16 flex justify-between">
            {currentUser ? <button onClick={handleLogOut} className="rounded-lg bg-[#BF202F] text-white my-4 px-4 py-2 hover:scale-110 ease-in duration-300">
              Log Out
            </button>: <Link href="/login">
              <button
                onClick={() => setNav(false)}
                className="rounded-lg bg-[#BF202F] text-white my-4 px-4 py-2 hover:scale-110 ease-in duration-300"
              >
                Log In
              </button>
            </Link>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
