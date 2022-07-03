import { Card, Tabs, Tab, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { BorrowForm } from "./BorrowForm";
import { ReturnForm } from "./ReturnForm";
import { Web3Service } from "../services/Web3Service";

export const TabInterface = () => {
  const [value, setValue] = useState(0);
  const [collateral, setCollateral] = useState("0");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    Web3Service.getCollateralBalance().then((balance) => {
      setCollateral(parseInt(balance)/10**18);
    });
  }, []);
  return (
    <Box sx={{ my: 5, mx: "auto" }}>
      <Card
        elevation={5}
        sx={{
          my: 5,
          mx: "auto",
          width: "250px",
          border: "solid 2px",
          borderColor: "primary.main",
          borderRadius: "15px",
          padding: "10px",
        }}
      >
        <Typography variant="h5" textAlign={"center"}>
          🔒 {collateral} Eth
        </Typography>
      </Card>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Borrow DINR" sx={{ mr: 5 }} />
        <Tab label="Return DINR" sx={{ ml: 5 }} />
      </Tabs>
      {value === 0 && (
        <Box my={5} sx={{ display: "flex", justifyContent: "center" }}>
          <BorrowForm />
        </Box>
      )}
      {value === 1 && (
        <Box my={5} sx={{ display: "flex", justifyContent: "center" }}>
          <ReturnForm />
        </Box>
      )}
    </Box>
  );
};
