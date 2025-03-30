import { Box, Grid2, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import { useTranslation } from "react-i18next";

export default function AuthPage() {
  const { type } = useParams();
  const { t } = useTranslation();

  console.log(type);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "100%" }}
    >
      <Grid2
        container
        justifyContent="flex-start"
        alignItems="center"
        direction="column"
        sx={{
          minWidth: "350px",
          minHeight: "400px",
          width: "24%",
          height: "55%",
          border: "2px solid",
          borderColor: "border.main",
          borderRadius: "10px",
          mb: "10%",
          p: 3,
        }}
      >
        <Grid2 size={12} sx={{ textAlign: "center", py: 2 }}>
          <Typography variant="h6" fontWeight={600} color="text.secondary">
            {type === "signup" ? t("auth.signupMsg") : t("auth.loginMsg") }
          </Typography>
        </Grid2>
        {type === "signup" ? <Signup /> : <Login />}
      </Grid2>
    </Box>
  );
}
