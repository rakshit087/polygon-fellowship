import { Box, Button, Typography, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { Web3Service } from "../services/Web3Service";

export const ReturnForm = () => {
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    Web3Service.getDebt().then((debt) => {
      setAmount(parseInt(debt) / 10 ** 18);
    });
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TextField label={`${amount.toString()} DINR DUE`} disabled />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          Web3Service.returnDINR().then((tx) => {
            console.log(tx);
          });
        }}
      >
        {" "}
        Return{" "}
      </Button>
    </Box>
  );
};
