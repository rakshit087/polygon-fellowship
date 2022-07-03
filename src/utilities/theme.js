import { createTheme } from "@mui/material/styles";
import { blue, grey, pink } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: blue[600],
      light: blue[50],
    },
    secondary: {
      main: pink[500],
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: blue[200],
      light: grey[900],
    },
    secondary: {
      main: pink[200],
    },
  },
});