import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Web3Service } from "../services/Web3Service";

export const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [status, setStatus] = useState("Loading");
  useEffect(() => {
    Web3Service.isConnected().then((isConnected) => {
      setStatus(isConnected ? "Connected" : "Connect");
    });
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Lend3r
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
          <Button
            variant="contained"
            size="small"
            sx={{ ml: 2 }}
            onClick={() => {
              setStatus("Loading");
              Web3Service.connect()
                .then(() => {
                  setStatus("Connected");
                })
                .catch(() => {
                  setStatus("Connect");
                });
            }}
            disabled={status !== "Connect"}
          >
            {status}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
