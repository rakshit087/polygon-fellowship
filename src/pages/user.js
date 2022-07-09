import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { UserAvatar } from "../components/UserAvatar";
import { UserNotConnected } from "../components/UserNotConnected";
import { Web3Service } from "../services/Web3Service";

const UserPage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    Web3Service.getWallet()
      .then((wallet) => setUser(wallet))
      .catch(() => setUser(null));
  });
  return (
    <Box sx={{ mx: { xs: 3, md: 15 }, my: { xs: 5, md: 10 } }}>
      {user ? <UserAvatar /> : <UserNotConnected />}
    </Box>
  );
};

export default UserPage;
