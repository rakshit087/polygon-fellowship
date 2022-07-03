import { Box, Button, Typography, TextField } from "@mui/material";

export const ReturnForm = () => {
  return (
    <Box sx={{display:"flex", flexDirection:"column"}}>
      <TextField label="O DINR Due" disabled />
      <Button variant="contained" color="primary" onClick={()=>{
        console.log("borrow")
      }}> Return </Button>
    </Box>
  );
};
