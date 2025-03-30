import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("auth.errors.email.invalid")
    .required("auth.errors.email.required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("auth.error.password.required"),
});
