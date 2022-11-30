import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import Link from "next/link";
import logo from "../public/images/logo.png";
import Image from "next/image";
import GoogleButton from "react-google-button";
import { useRouter } from "next/router";

const signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [isValid, setIsValid] = useState(false)
  const { signUp, googleSignIn } = useUserAuth();
   const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp( email, password);
      router.push('/login')
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn();
      router.push("/profile")
    }catch(err) {
      setError(err.message)
    }
  }

useEffect(() => {
  if (password === cpassword) {
    setIsValid(true)} else {
      setIsValid(false)
    }
}, [password, cpassword])



  return (
    <>
    <div className="bg-gradient-to-r from-slate-100 to-red-600 w-full h-full md:h-screen">
      <div className="flex min-h-full flex-col justify-center py-36 sm:px-6 lg:px-8 z-100">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image className="mx-auto h-12 w-auto" src={logo} alt="/" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign Up For A <br className="md:hidden"></br> New Account
          </h2>
          {error && <Alert variant="danger">{error}</Alert>}
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setCpassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={!isValid}
                  className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="flex w-full justify-center py-4">
                <GoogleButton onClick={handleGoogleSignIn}/>
              </div>
              <div className="flex w-full justify-center py-4">
                <p className="text-gray-500">Already have an account? <Link href="/login"><span className="underline">Log in</span></Link></p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default signup;
