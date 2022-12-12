import { getIdToken } from "firebase/auth"
import { useUserAuth, onAuthStateChanged } from "../context/UserAuthContext";
import { db } from "../firebase/firebaseApp";
import { doc, getDoc } from 'firebase/firestore'
import { collection, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const { currentUser } = auth



export default async function isUserPremium(){
  const getIdTokenResult = auth.currentUser?.getIdToken(true);
  const decodedToken = await auth.currentUser?.getIdTokenResult();
  // const docRef = doc(db, "users", user.uid, 'subscriptions',)
  // const snapShot = await getDoc(docRef)
  // if (docSnap.exists()) {
  //  let premium = snapShot.data().
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }
  return decodedToken?.claims?.stripeRole ? true : false;
}