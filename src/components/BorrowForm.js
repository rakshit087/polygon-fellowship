import { Box, Button, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { Web3Service } from "../services/Web3Service";

export const BorrowForm = () => {
  const [amount, setAmount] = useState("");
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TextField
        label="Enter Collatoral in ETH"
        onChange={(e) => setAmount(e.target.value)}
        type="number"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          Web3Service.borrowDINR(amount);
        }}
      >
        Borrow
      </Button>
    </Box>
  );
};
