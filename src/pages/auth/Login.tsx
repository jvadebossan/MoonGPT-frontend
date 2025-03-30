import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./lib/yupSchemas";
import EmailInput from "../../components/Forms/Email";
import PasswordInput from "../../components/Forms/Password";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EmailInput error={errors.email} register={register} />
      <PasswordInput error={errors.password} register={register} />
      <Button
        fullWidth
        type="submit"
        variant="contained"
        sx={{ marginTop: 2, height: "45px" }}
      >
        Login
      </Button>
    </form>
  );
}
