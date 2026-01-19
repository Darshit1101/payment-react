import axiosInstance from "../../api/axiosInstance";
import { stripePromise } from "../../configs/stripe";
import PaymentModal from "./PaymentModal";
import Button from "@mui/material/Button";
import { Elements } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const DashboardPage = () => {
  const [clientSecret, setClientSecret] = useState(null);
  const [loading, setLoading] = useState(false);

  const createPaymentIntent = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.post("/stripe/create-intent");
      setClientSecret(res.clientSecret);
    } catch (error) {
      console.error("Error creating payment intent:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!clientSecret) {
    return (
      <div style={{ maxWidth: 420, margin: "40px auto", textAlign: "center" }}>
        <h2>Payment Setup</h2>
        <Button
          variant="contained"
          onClick={createPaymentIntent}
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? "Setting up payment..." : "Pay Now"}
        </Button>
      </div>
    );
  }

  const options = {
    clientSecret,
  };

  return (
    <Elements options={options} stripe={stripePromise}>
      <PaymentModal />
    </Elements>
  );
};

export default DashboardPage;
