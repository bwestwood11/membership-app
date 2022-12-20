import { db } from "../firebase/firebaseApp";
import {collection, doc, addDoc, onSnapshot, where, query, getDocs} from 'firebase/firestore';
import getStripe from "./initializeStripe"




export async function CreateCheckoutSessionStandard(uid) {
  let checkoutRef = collection(db, `users/${uid}/checkout_sessions`);
  const checkoutSessionRef = await addDoc(checkoutRef, {
      price: priceId,
      // This can be removed if you don't want promo codes
      allow_promotion_codes: true,
      success_url: window.location.origin,
      cancel_url: window.location.origin
    });

  onSnapshot(checkoutSessionRef, async (snap) => {
    const { sessionId } = snap.data();

    if (sessionId) {
      const stripe = await getStripe();
       
      stripe.redirectToCheckout({ sessionId });
    } 
  })
};