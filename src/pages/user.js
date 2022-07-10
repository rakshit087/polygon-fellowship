import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { UserNotConnected } from "../components/UserNotConnected";
import { Web3Service } from "../services/Web3Service";
import { useRecoilState } from "recoil";
import { statusAtom } from "../utilities/atoms";
import { UserPageHeader } from "../components/UserPageHeader";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useRecoilState(statusAtom);

  useEffect(() => {
    Web3Service.getWallet()
      .then((wallet) => setUser(wallet))
      .catch(() => setUser(null));
  });
  return (
    <Box
      mx={3}
      sx={{ px: { xs: 1, sm: 10, md: 15, lg: 32}, my: { xs: 5, md: 10 } }}
    >
      {status.currentStatus === "Connected" ? (
        <UserPageHeader user={user} />
      ) : (
        <UserNotConnected message={status.message} />
      )}
    </Box>
  );
};

export default UserPage;
