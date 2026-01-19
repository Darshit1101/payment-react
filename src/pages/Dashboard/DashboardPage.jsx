import axiosInstance from "../../api/axiosInstance";
import { stripePromise } from "../../configs/stripe";
import PaymentModal from "./PaymentModal";
import Button from "@mui/material/Button";
import { Elements } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const DashboardPage = () => {
  const [clientSecret, setClientSecret] = useState(null);

  const createPaymentIntent = async () => {
    try {
      const res = await axiosInstance.post("/stripe/create-intent");
      setClientSecret(res.clientSecret);
    } catch (error) {
      console.error("Error creating payment intent:", error);
    }
  };

  if (!clientSecret) {
    return (
      <div style={{ margin: "20px" }}>
        <h2>Payment Setup</h2>
        <Button
          variant="contained"
          onClick={createPaymentIntent}
          sx={{ mt: 2 }}
        >
          Pay Now
        </Button>
      </div>
    );
  }

  return (
    <Elements options={{ clientSecret }} stripe={stripePromise}>
      <PaymentModal />
    </Elements>
  );
};

export default DashboardPage;
