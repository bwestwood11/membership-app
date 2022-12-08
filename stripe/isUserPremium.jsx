import { getIdToken } from "firebase/auth"
import firebase from "../firebase/firebaseApp"
import { useUserAuth, onAuthStateChanged } from "../context/UserAuthContext";


export default async function isUserPremium(){

    await firebase.auth().currentUser.getIdToken(true);
    const decodedToken = await firebase.auth().currentUser.getIdTokenResult(); console.log(decodedToken)
    return decodedToken.stripeRole ? true: false;
   
}