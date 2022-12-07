import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise = null

const initializeStripe = async () => {
    if (!stripePromise) { 
        stripePromise = await loadStripe(
        "pk_test_BtvHXje9566mPGPMtvzsfgBc00gs4p7FDL"
    );
}
return stripePromise
}

export default initializeStripe;