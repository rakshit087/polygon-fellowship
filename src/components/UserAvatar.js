import { Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export const UserAvatar = ({ profilePicture }) => {
  return (
    <Avatar sx={{ bgcolor: "primary.main", height: 64, width: 64 }}>
      <PersonIcon fontSize="medium" />
    </Avatar>
  );
};
