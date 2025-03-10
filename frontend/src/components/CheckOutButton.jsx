import React from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QUjXyG6mLPtdIeHtjRqK12P3XmXFildsPWZCjcGiZn9NPWKuopEjYq9FVyZqG2hUmFBwadmPiAAkk0myOkuRBeo00NzmzDRAs"
  // "pk_test_51PTHeQ02aZCNcmKxMh78Kvknepx7DzQPzbJg92tCW2OU6dgDUCdKZQgm5JrTILzGY9aXlxUrGaqTMGxRfk73xaZJ00S0hfhKuE"
);

const CheckoutButton = ({ cart, cookies }) => {
  const handleClick = async () => {
    const stripe = await stripePromise;
    const token = cookies.authToken;

    const sessionResponse = await axios.post(
      "http://localhost:5000/stripe/create-checkout-session",
      {
        products: cart,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { sessionId } = sessionResponse.data;

    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.error("Error redirecting to checkout:", error);
    }
  };

  return (
    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" role="link" >
      Checkout
    </button>
  );
};

export default CheckoutButton;
