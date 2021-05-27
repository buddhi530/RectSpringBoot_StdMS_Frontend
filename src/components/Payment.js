import React, { Component } from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";

function Payment() {
  async function handleToken(token) {
    console.log(token);
    await axios
      .post("http://localhost:8080/api/payment/charge", "", {
        headers: {
          token: token.id,
          amount: 500,
        },
      })
      .then(() => {
        alert("Payment Success");
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <div className="Payment">
      <Stripe
        stripeKey="pk_test_****************************"
        token={handleToken}
      />
    </div>
  );
}
export default Payment;
