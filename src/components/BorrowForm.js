import { Box, Button, Typography, TextField } from "@mui/material";

export const BorrowForm = () => {
  return (
    <Box sx={{display:"flex", flexDirection:"column"}}>
      <TextField label="Enter Collatoral in ETH" />
      <Button variant="contained" color="primary" onClick={()=>{
        console.log("borrow")
      }}> Borrow </Button>
    </Box>
  );
};
