import { createTheme } from "@mui/material";

export const customThemeXCards = createTheme({
  typography: {
    h2: {
      fontSize: 25,
      fontWeight: "bolder",
    },
    h3: {
      fontSize: 22,
      color: "brown",
      fontWeight: "bolder",
    },

    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 18,
      color: "green",
    },
  },
});
