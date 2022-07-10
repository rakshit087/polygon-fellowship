import { Box, Typography } from "@mui/material";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

export const UserNotConnected = ({ message }) => {
  return (
    <Box textAlign="center">
      <HeartBrokenIcon fontSize="large" />
      <Typography variant="h5">{message}</Typography>
    </Box>
  );
};
