import styled from "@emotion/styled";
import logo from "../../assets/logo_moongpt.svg";
import { Box, Button, Theme, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledLogo = styled("img")(({ theme }) => ({
  width: "10%",
  filter: theme === "dark" ? "brightness(0) invert(1)" : "",
}));

export default function Header() {
  const theme = useTheme<Theme>();
  const { t } = useTranslation();

  return (
    <header>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: "100%",
          p: "20px 0px",
        }}
      >
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          gap={2}
          flex={1}
        >
          <StyledLogo
            src={logo}
            alt="Moongpt Logo"
            theme={theme.palette.mode}
          />
          <Typography component="h3" sx={{ fontWeight: 600 }}>
            {t("header.logo")}
          </Typography>
        </Box>
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 2,
          }}
        >
          <Box display="flex" justifyContent="center" gap={3}>
            <Button>{t("header.pricing")}</Button>
            <Button>{t("header.aboutUs")}</Button>
          </Box>
        </nav>

        <Box display="flex" justifyContent="flex-end" flex={1} gap={3}>
          <Button>{t("header.signUp")}</Button>
          <Button variant="contained">{t("header.login")}</Button>
        </Box>
      </Box>
    </header>
  );
}
