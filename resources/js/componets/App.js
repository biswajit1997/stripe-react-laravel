import React from "react";
import Stripe from "./Stripe";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(
//     "pk_test_51IXAFNSBBGylYgmsNnENDslumg0UutlaO2bAh2l7OzkPrbfLTxTXXY7nT2cDlKU9bTtJVmcyOgNG8UqKsYjgI1ZH005IAWptqI"
// );

const App = () => {
    return <Stripe />;
};
export default App;
