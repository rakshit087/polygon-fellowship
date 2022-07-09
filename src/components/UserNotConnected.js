import { Box, Typography } from "@mui/material";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

export const UserNotConnected = () => {
  return (
    <Box textAlign="center">
      <HeartBrokenIcon fontSize="large" />
      <Typography variant="h5">User Not Connected</Typography>
    </Box>
  );
};
