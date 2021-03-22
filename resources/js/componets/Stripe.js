import React, { useState } from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Stripe() {
    const [product] = useState({
        name: "Stripe Payment",
        price: 64998.67,
        description: "Payment Cool car",
    });

    async function handleToken() {
        const response = await axios.post("api/create-payment-intent", {
            product,
        });
        const status = "success";

        if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }

    return (
        <div className="container">
            <div className="product">
                <h1>{product.name}</h1>
                <h3>On Sale · {product.price}</h3>
            </div>
            <StripeCheckout
                stripeKey="pk_test_51IXAFNSBBGylYgmsNnENDslumg0UutlaO2bAh2l7OzkPrbfLTxTXXY7nT2cDlKU9bTtJVmcyOgNG8UqKsYjgI1ZH005IAWptqI"
                token={handleToken}
                amount={product.price}
                name="Stripe Payment"
                billingAddress
                shippingAddress
            />
        </div>
    );
}
export default Stripe;
