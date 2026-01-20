import { Box, Typography } from "@mui/material";
import React from "react";

const PaymentFailed = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h4" color="error.main">
        ❌ Payment Failed
      </Typography>
      <Typography mt={2}>Please try again</Typography>
    </Box>
  );
};

export default PaymentFailed;
