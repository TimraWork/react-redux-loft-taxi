import { createMuiTheme } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";

const ACCENT = "#FDBF5A";
const ACCENT_HOVER = "#FFA842";
const TEXT = "#1C1A19";
const GRAY = "#7B7B7B";
const GRAY_LIGHT = "#E0E0E0";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: TEXT,
    },
    secondary: {
      main: ACCENT,
    },
  },
  shape: {
    borderRadius: 10,
  },
  status: {
    danger: orange[500],
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          fontSize: "21px",
          fontWeight: 400,
          width: "100%",
          backgroundColor: ACCENT,
        },
        textPrimary: {
          "&:hover": {
            backgroundColor: ACCENT_HOVER,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // padding: "90px",
          position: "relative",
          boxShadow: "0px 3px 20px rgba(0, 0, 0, 0.2) !important",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: 20,
          width: "100%",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 10,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            fontWeight: 700,
            fontSize: 16,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: `1px solid ${GRAY_LIGHT}`,
          },
        },
      },
    },
  },
  typography: {
    subtitle1: {
      fontSize: 18,
      color: GRAY,
      marginBottom: 20,
    },
    h1: {
      fontSize: 32,
      fontWeight: 700,
      marginBottom: 20,
    },
  },
});