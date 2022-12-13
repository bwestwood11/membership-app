import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import Link from "next/link";
import logo from "../public/images/logo.png";
import Image from "next/image";
import GoogleButton from "react-google-button";
import { useRouter } from "next/router";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { db } from "../firebase/firebaseApp";
import { collection, addDoc } from "firebase/firestore";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { signUp, googleSignIn, sendEmailVerification, verifyEmail, user } = useUserAuth();
  const router = useRouter();
  const auth = useUserAuth();
  const { currentUser } = auth

 
 // Function that will handle Google sign in Firebase
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn();
      await createGoogleUser()
      router.push("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  
 const usersCollectionGoogleRef = collection(db, "users");
  const createGoogleUser = async () => {
    await addDoc(usersCollectionGoogleRef, {
      displayName: currentUser.displayName,
      email: currentUser.email,
      photoURL: currentUser.photoURL,
    });
    console.log(createGoogleUser);
  };


// Create user data for sign-in form to send to firebase 
 const usersCollectionRef = collection(db, "users");
  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      displayName: name,
      email: email,
      password: password,
    });
    console.log(createUser);
  };


  // Function that will handle sign up to Firebase Email and Password
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredentials = await signUp(email, password);
      const verifyEmailAddress = await verifyEmail(auth.currentUser);
      router.push("/login");
    } catch (err) {
      setError(err.message);
    }
  };

 
  // Checking to see if passwords match to either disable or enable sign up button
  useEffect(() => {
    if (password === cpassword) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [password, cpassword]);

  // handle password eye
  const [passwordEye, setPasswordEye] = useState(false);

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };
  // handle confirm password eye
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const handleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };

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
              {/* Beginning of form */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Email Section */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      value={name}
                      autoComplete="username"
                      required
                      onChange={(e) => setName(e.target.value)}
                      className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
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
                      value={email}
                      autoComplete="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                {/* Password Section */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="password"
                      name="password"
                      type={passwordEye === false ? "password" : "text"}
                      autoComplete="current-password"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    <div className="text-2xl absolute top-4 right-5 cursor-pointer">
                      {passwordEye === false ? (
                        <AiFillEyeInvisible onClick={handlePasswordClick} />
                      ) : (
                        <AiFillEye onClick={handlePasswordClick} />
                      )}
                    </div>
                  </div>
                </div>
                {/* Confirm Password Section */}
                <div>
                  <label
                    htmlFor="cpassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="cpassword"
                      name="cpassword"
                      type={confirmPasswordEye === false ? "password" : "text"}
                      autoComplete="current-password"
                      required
                      onChange={(e) => setCpassword(e.target.value)}
                      className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    <div className="text-2xl absolute top-4 right-5 cursor-pointer">
                      {confirmPasswordEye === false ? (
                        <AiFillEyeInvisible
                          onClick={handleConfirmPasswordClick}
                        />
                      ) : (
                        <AiFillEye onClick={handleConfirmPasswordClick} />
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={createUser}
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
                  <GoogleButton onClick={handleGoogleSignIn} />
                </div>
                <div className="flex w-full justify-center py-4">
                  <p className="text-gray-500">
                    Already have an account?{" "}
                    <Link href="/login">
                      <span className="underline">Log in</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
