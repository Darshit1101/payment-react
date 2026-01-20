import axiosInstance from "../../../api/axiosInstance";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentProcessing = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const paymentIntentId = state?.paymentIntentId;

  useEffect(() => {
    if (!paymentIntentId) {
      navigate("/");
      return;
    }

    const interval = setInterval(async () => {
      try {
        const res = await axiosInstance.get(
          `/stripe/payment-status/${paymentIntentId}`,
        );

        if (res.status === "SUCCESS") {
          clearInterval(interval);
          navigate("/payment-success");
        }

        if (res.status === "FAILED") {
          clearInterval(interval);
          navigate("/payment-failed");
        }
      } catch (err) {
        console.error("Status check failed", err);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [paymentIntentId, navigate]);

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
      px={2}
    >
      <CircularProgress size={48} />
      <Typography variant="h6" mt={3}>
        Processing your payment
      </Typography>
      <Typography color="text.secondary" mt={1}>
        Please don’t refresh or close this page
      </Typography>
    </Box>
  );
};

export default PaymentProcessing;
