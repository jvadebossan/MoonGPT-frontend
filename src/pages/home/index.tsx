import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Home() {
  const {t } = useTranslation();
  return (
    <Box>
      <h1>{t("home.title")}</h1>
    </Box>
  );
}
