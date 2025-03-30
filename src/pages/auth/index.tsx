import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import { useTranslation } from "react-i18next";

export default function AuthPage() {
  const { type } = useParams();
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "100%" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          minWidth: "350px",
          minHeight: "380px",
          width: "24%",
          height: "auto",
          border: "2px solid",
          borderColor: "border.main",
          borderRadius: "10px",
          mb: "10%",
          p: 3,
        }}
      >
        <Box sx={{ textAlign: "center", py: 2 }}>
          <Typography variant="h6" fontWeight={600} color="text.secondary">
            {type === "signup" ? t("auth.signupMsg") : t("auth.loginMsg")}
          </Typography>
        </Box>
        {type === "signup" ? <Signup /> : <Login />}
      </Box>
    </Box>
  );
}
