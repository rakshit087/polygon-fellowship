import { Box, Typography } from "@mui/material";
import { UserAvatar } from "../components/UserAvatar";
export const UserPageHeader = ({ user }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderBottom: "solid 1px",
        pb:3
      }}
    >
      <UserAvatar />
      <Box>
        <Typography variant="h6" ml="2.5rem">
          {user.slice(0, 5)}...{user.slice(-5)}
        </Typography>
        <Typography variant="body2" ml="2.5rem" mt="1rem">
          "This is just an unfinised bio.
          I will add some more information here."
        </Typography>
      </Box>
    </Box>
  );
};
