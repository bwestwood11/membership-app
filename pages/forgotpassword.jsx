import React, { useState } from 'react';
import Image from 'next/image';
import logo from "../public/images/logo.png";
import Link from 'next/link';
import { useUserAuth } from "../context/UserAuthContext";
import { useRouter } from "next/router";
import { Alert } from 'react-bootstrap';


const Forgotpassword = () => {
  const { forgotPassword } = useUserAuth()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [error, setError] = useState("");
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const userCredentials = await forgotPassword(email);
      router.push("/login");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <div className="bg-gradient-to-r from-slate-100 to-red-600 w-full h-full md:h-screen">
        <div className="flex min-h-full flex-col justify-center py-36 sm:px-6 lg:px-8 z-100">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image className="mx-auto h-12 w-auto" src={logo} alt="/" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Forgot <br className="md:hidden"></br> Password
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6">
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
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <button
                  onClick={handleSubmit}
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Send Password Reset 
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
                <p className="text-gray-500">Do not have an account? <Link href="/signup"><span className="underline">Sign Up</span></Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Forgotpassword