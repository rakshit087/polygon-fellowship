import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ConnectButton } from "../components/ConnectButton";

export const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" sx={{px:{xs:1, sm:5, md:10, lg:24}}}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            KueSocial
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? (
              <DarkModeIcon fontSize="medium" color="primary" />
            ) : (
              <LightModeIcon fontSize="medium" color="primary" />
            )}
          </IconButton>
          <ConnectButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
