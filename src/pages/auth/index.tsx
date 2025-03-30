import { useParams } from "react-router-dom";

export default function AuthPage() {
  const { type } = useParams();
  return (
    <div>
      {type === "login" && <h1>Login Page</h1>}
      {type === "signup" && <h1>Signup Page</h1>}
    </div>
  );
}
