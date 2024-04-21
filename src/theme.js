("use client");
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    keys: ["mobile", "tablet", "desktop", "largescreen"],
    values: {
      mobile: 0,
      tablet: 481,
      desktop: 769,
      largescreen: 1025,
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Averta Regular",
      textTransform: "none",
      whiteSpace: "nowrap",
      lineHeight: "24px",
    },
  },
});
