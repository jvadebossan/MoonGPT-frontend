import {
  Button,
  Grid2,
  styled,
  Typography,
  Theme,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import desktopLightImg from "../../assets/desktop_view_light.png";
import desktopDarkImg from "../../assets/desktop_view_dark.png";
import mobileLightImg from "../../assets/mobile_view_light.png";
import mobileDarkImg from "../../assets/mobile_view_dark.png";

const DesktopImg = styled("img")(({ theme }) => ({
  width: "45%",
  boxShadow: `0px 0px 100px ${
    theme.palette.mode === "light" ? "#00000026" : "#ffffff1a"
  }`,
  position: "absolute",
  zIndex: 2,
  borderRadius: "10px",
  right: "20px",
  bottom: "25%",
}));

const MobileImg = styled("img")(({ theme }) => ({
  width: "16%",
  boxShadow: `0px 0px 100px ${
    theme.palette.mode === "light" ? "#00000026" : "#ffffff1a"
  }`,
  position: "absolute",
  zIndex: 3,
  borderRadius: "10px",
  bottom: "5%",
  right: "36%",
}));

export default function Home() {
  const theme = useTheme<Theme>();
  const { t } = useTranslation();
  const palette = String(theme.palette.mode);

  return (
    <>
      <Grid2 container alignItems="center" sx={{ height: "100%", pb: 15 }}>
        <Grid2 size={4}>
          <Typography variant="h3" component="h1" fontWeight="600">
            {t("home.title")}
          </Typography>
          <Typography variant="subtitle1" fontWeight="400" sx={{ pt: 4 }}>
            {t("home.description")}
          </Typography>
          <Button
            sx={{ mt: 4 }}
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
          >
            {t("home.button")}
          </Button>
        </Grid2>
        <Grid2 size={8}>
          <DesktopImg
            src={palette === "light" ? desktopLightImg : desktopDarkImg}
          />
          <MobileImg
            src={palette === "light" ? mobileLightImg : mobileDarkImg}
          />
        </Grid2>
      </Grid2>
    </>
  );
}
