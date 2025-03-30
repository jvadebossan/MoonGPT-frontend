import { Box, TextField } from "@mui/material";
import { FieldError } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface EmailInputProps {
  label?: string;
  placeholder?: string;
  error?: FieldError;
  register: any;
}

export default function EmailInput({
  label = "auth.inputs.email",
  error,
  register,
}: EmailInputProps) {
  const { t } = useTranslation();

  return (
    <TextField
      fullWidth
      label={t(label)}
      variant="outlined"
      margin="normal"
      {...register("email")}
      error={!!error}
      helperText={t(error?.message!)}
    />
  );
}
