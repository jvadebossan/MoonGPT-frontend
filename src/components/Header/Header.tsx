import styled from "@emotion/styled";
import logo from "../../assets/logo_moongpt.svg";
import { Box, Button, Theme, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ColorModeContext } from "../../providers/colorMode";
import { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link } from "react-router-dom";

const StyledLogo = styled("img")(({ theme }) => ({
  width: "100%",
  filter: theme === "dark" ? "brightness(0) invert(1)" : "",
}));

export default function Header() {
  const colorMode = useContext(ColorModeContext);
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
          <Link
            to={"home"}
            style={{
              width: "35px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <StyledLogo
              src={logo}
              alt="Moongpt Logo"
              theme={theme.palette.mode}
            />
          </Link>
          <Link to={"home"} style={{ textDecoration: "none" }}>
            <Typography
              component="h3"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              {t("header.logo")}
            </Typography>
          </Link>
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
          <Link to={"auth/signup"}>
            <Button>{t("header.signUp")}</Button>
          </Link>
          <Link to={"auth/login"}>
            <Button variant="contained">{t("header.login")}</Button>
          </Link>
        </Box>
      </Box>

      <LightModeIcon
        onClick={colorMode.toggleColorMode}
        sx={{
          width: "30px",
          height: "30px",
          position: "absolute",
          right: "11px",
          top: "23px",
          borderRadius: "360px",
        }}
      />
    </header>
  );
}
