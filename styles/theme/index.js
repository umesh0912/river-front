import { BoltRounded } from "@mui/icons-material";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";

export const theme = createTheme({
  extraColor: {
    headerbg: "#FFE194",
    black: "#1e1e1e",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },
  spacing: 4,
  palette: {
    primary: {
      main: "#FCA311",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#4C4C6D",
      contrastText: "#202020",
    },
    success: {
      main: "#14B8A6",
      contrastText: "#202020",
    },
    info: {
      main: "#666666",
      contrastText: "#323232",
    },
    warning: {
      main: "#FFB020",
      contrastText: "#202020",
    },
    error: {
      main: "#D14343",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#4C4C6D",
      secondary: "#C49F43",
      disabled: "rgba(55, 65, 81, 0.48)",
    },
  },
  typography: {
    fontFamily: "Lato",
    fontSize: 16,
    htmlFontSize: 16,
    h1: {
      fontSize: 50,
      fontWeight: 600,
    },
    h2: {
      fontSize: 30,
      fontWeight: 600,
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
    },
    h4: {
      fontSize: 18,
      fontWeight: 600,
    },
    h5: {
      fontSize: 12,
      fontWeight: 600,
    },
    h6: {
      fontSize: 6,

      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 24,
      fontWeight: 700,
      color: "#1e1e1e",
    },
    subtitle2: {
      fontSize: 20,
      fontWeight: 600,
      color: "#1e1e1e",
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      color: "#1a1a1a",
    },
    body2: {
      fontSize: 16,
      fontWeight: 400,
    },
    button: {
      fontSize: 16,
      fontWeight: 600,
    },
    caption: {
      fontSize: 14,
      fontWeight: 400,
    },
    overline: {
      fontSize: 8,
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
    easing: {
      // This is the most common easing curve.
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#FFF !important",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "1rem 3rem",
        },
      },
    },
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
    "0px 1px 2px rgba(100, 116, 139, 0.12)",
    "0px 1px 4px rgba(100, 116, 139, 0.12)",
    "0px 1px 5px rgba(100, 116, 139, 0.12)",
    "0px 1px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 6px rgba(100, 116, 139, 0.12)",
    "0px 3px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
    "0px 5px 12px rgba(100, 116, 139, 0.12)",
    "0px 5px 14px rgba(100, 116, 139, 0.12)",
    "0px 5px 15px rgba(100, 116, 139, 0.12)",
    "0px 6px 15px rgba(100, 116, 139, 0.12)",
    "0px 7px 15px rgba(100, 116, 139, 0.12)",
    "0px 8px 15px rgba(100, 116, 139, 0.12)",
    "0px 9px 15px rgba(100, 116, 139, 0.12)",
    "0px 10px 15px rgba(100, 116, 139, 0.12)",
    "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
    "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
  ],
});
