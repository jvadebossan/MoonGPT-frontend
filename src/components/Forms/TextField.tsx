import { TextField } from "@mui/material";
import { FieldError } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface TextInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  error?: FieldError;
  register: any;
}

export default function TextInput({
  name,
  label = `auth.inputs.${name}`,
  error,
  register,
}: TextInputProps) {
  const { t } = useTranslation();

  return (
    <TextField
      fullWidth
      label={t(label)}
      variant="outlined"
      margin="normal"
      {...register(name)}
      error={!!error}
      helperText={t(error?.message!)}
    />
  );
}
