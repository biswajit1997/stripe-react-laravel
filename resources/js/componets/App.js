// import React from "react";
// import Stripe from "./Stripe";

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// // const stripePromise = loadStripe(
// //     "pk_test_51IXAFNSBBGylYgmsNnENDslumg0UutlaO2bAh2l7OzkPrbfLTxTXXY7nT2cDlKU9bTtJVmcyOgNG8UqKsYjgI1ZH005IAWptqI"
// // );

// const App = () => {
//     return <Stripe />;
// };
// export default App;
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./App.css";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
// Sign in to see examples pre-filled with your key.
const promise = loadStripe("pk_test_51IXAFNSBBGylYgmsNnENDslumg0UutlaO2bAh2l7OzkPrbfLTxTXXY7nT2cDlKU9bTtJVmcyOgNG8UqKsYjgI1ZH005IAWptqI");
export default function App() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}