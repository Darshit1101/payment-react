import { Box, Typography } from "@mui/material";
import React from "react";

const PaymentSuccess = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h4" color="success.main">
        🎉 Payment Successful
      </Typography>
      <Typography mt={2}>Thank you for your payment</Typography>
    </Box>
  );
};

export default PaymentSuccess;
