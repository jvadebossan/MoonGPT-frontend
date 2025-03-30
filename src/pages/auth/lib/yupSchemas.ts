import * as yup from "yup";

const passwordRules =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("auth.errors.email.invalid")
    .required("auth.errors.email.required"),
  password: yup
    .string()
    .matches(passwordRules, "auth.errors.password.invalid")
    .required("auth.errors.password.required"),
});

export const signupSchema = yup.object({
  fullName: yup.string().required("auth.errors.fullName.required"),
  email: yup
    .string()
    .email("auth.errors.email.invalid")
    .required("auth.errors.email.required"),
  password: yup
    .string()
    .matches(passwordRules, "auth.errors.password.invalid")
    .required("auth.errors.password.required"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "auth.errors.repeatPassword.mismatch")
    .required("auth.errors.repeatPassword.required"),
});
