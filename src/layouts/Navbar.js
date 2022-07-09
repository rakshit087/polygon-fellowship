import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ConnectButton } from "../components/ConnectButton";

export const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            MyApp
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
