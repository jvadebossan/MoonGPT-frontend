import { createTheme, PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    border: {
      main: string;
    };
  }
  interface PaletteOptions {
    border?: {
      main?: string;
    };
  }
}

export const createCustomTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#F8FAFC" : "#0F172A",
      },
      secondary: {
        main: mode === "dark" ? "#E2E8F0" : "#334155",
      },
      background: {
        default: mode === "dark" ? "#0F172A" : "#F8FAFC",
        paper: mode === "dark" ? "#1E293B" : "#FFFFFF",
      },
      text: {
        primary: mode === "dark" ? "#E2E8F0" : "#0F172A",
        secondary: mode === "dark" ? "#64748B" : "#94A3B8",
      },
      error: {
        main: mode === "dark" ? "#F87171" : "#EF4444",
      },
      success: {
        main: mode === "dark" ? "#4ADE80" : "#10B981",
      },
      warning: {
        main: mode === "dark" ? "#FBBF24" : "#F59E0B",
      },
      border: {
        main: mode === "light" ? "#E2E8F0" : "#334155",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            "&.MuiButton-contained": {
              backgroundColor: mode === "light" ? "#0F172A" : "#E2E8F0",
              color: mode === "light" ? "#E2E8F0" : "#0F172A",
              "&:hover": {
                backgroundColor: mode === "light" ? "#334155" : "#F8FAFC",
              },
            },
            textTransform: "capitalize",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "dark" ? "#1E293B" : "#FFFFFF",
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              height: "45px",
              "& input": {
                padding: "8px 12px",
                lineHeight: 1.5,
              },
            },
            "& .MuiInputLabel-root": {
              top: "-4px",
            },
            "& .MuiInputLabel-shrink": {
              top: "0px",
            },
          },
        },
      },
    },
  });
};
