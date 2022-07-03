import { useState } from "react";
import { CssBaseline, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Navbar } from "../layouts/Navbar";
import { darkTheme, lightTheme } from "../utilities/theme";

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <CssBaseline>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Paper sx={{ minHeight: "100vh" }}>
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Component {...pageProps} isDarkMode={isDarkMode} />
        </Paper>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default MyApp;
