import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";

const PaymentModal = () => {
  const stripe = useStripe();
  const elements = useElements();

  // Handle payment confirmation
  const handlePay = async () => {
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.href,
      },
      redirect: "if_required",
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      console.log("Payment succeeded!");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f7fa",
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2.5, sm: 4 },
            borderRadius: 3,
          }}
        >
          <Typography variant="h6" fontWeight={600} textAlign="center" mb={3}>
            Complete Your Payment
          </Typography>

          <PaymentElement />

          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{ mt: 3, py: 1.3 }}
            disabled={!stripe}
            onClick={handlePay}
          >
            Complete Payment
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default PaymentModal;
