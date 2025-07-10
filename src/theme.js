import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: `'Mulish', 'Montserrat', sans-serif`,
  },
  box: {
    fontFamily: `'Mulish', 'Montserrat', sans-serif`,
  },
});

export default theme;
