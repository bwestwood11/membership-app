import React from 'react'
import usePremiumStatus from "../stripe/usePremiumStatus";
import { useUserAuth, onAuthStateChanged } from '../context/UserAuthContext';

const Premium = () => {
  const { currentUser } = useUserAuth()
  const premiumStatus = usePremiumStatus(currentUser)
  return (
    <div className='pt-44'>
      {premiumStatus ? <h1>Hi {currentUser?.email}</h1>: <h1>You should become a premium member</h1>}
    </div>
  )
}

export default Premium