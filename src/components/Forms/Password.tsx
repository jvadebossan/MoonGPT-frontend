import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FieldError } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface PasswordInputProps {
  label?: string;
  placeholder?: string;
  error?: FieldError;
  register: any;
}

export default function PasswordInput({
  label = "auth.inputs.password",
  placeholder = "auth.placeholders.password",
  error,
  register,
}: PasswordInputProps) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      fullWidth
      label={t(label)}
      placeholder={t(placeholder)}
      type={showPassword ? "text" : "password"}
      variant="outlined"
      margin="normal"
      {...register("password")}
      error={!!error}
      helperText={t(error?.message!)}
      filledInput={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label={t("auth.inputs.show_password")}
              onClick={togglePasswordVisibility}
              edge="end"
            >
              {showPassword ? (
                <VisibilityOff sx={{ color: "text.secondary" }} />
              ) : (
                <Visibility sx={{ color: "text.secondary" }} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
