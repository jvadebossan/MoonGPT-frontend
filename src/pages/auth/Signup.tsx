import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "./lib/yupSchemas";
import TextInput from "../../components/Forms/TextField";
import EmailInput from "../../components/Forms/Email";
import PasswordInput from "../../components/Forms/Password";
import RepeatPasswordInput from "../../components/Forms/RepeatPassoword";
import { useTranslation } from "react-i18next";

type FormData = {
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export default function Signup() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput name="fullName" error={errors.fullName} register={register} />
      <EmailInput error={errors.email} register={register} />
      <PasswordInput error={errors.password} register={register} />
      <RepeatPasswordInput error={errors.repeatPassword} register={register} />
      <Button
        fullWidth
        type="submit"
        variant="contained"
        sx={{ marginTop: 2, height: "45px" }}
      >
        {t("auth.signup")}
      </Button>
    </form>
  );
}
