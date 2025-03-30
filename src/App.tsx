import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "@emotion/react";
import i18n from "./i18n";
import { ColorModeContext } from "./providers/colorMode";
import { useState, useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createCustomTheme } from "./providers/theme";
import PublicLayout from "./components/Layouts/PublicLayout";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const theme = useMemo(() => createCustomTheme(mode), [mode]);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <I18nextProvider i18n={i18n}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <PublicLayout />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </I18nextProvider>
  );
}

export default App;
