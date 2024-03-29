import { useState } from "react";

import { useLogin } from "../hooks/useLogin";

import AuthFormLayout from "./AuthFormLayout";
import Input from "../../../components/form/Input";
import Button from "../../../components/ui/Button";
import SpinnerMini from "../../../components/ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <AuthFormLayout onSubmit={handleSubmit}>
      <Input
        isEmail
        disabled={isPending}
        placeholder="Email"
        value={email}
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        isPassword
        disabled={isPending}
        placeholder="Password"
        value={password}
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button className="brand" disabled={!email || !password}>
        {isPending ? (
          <>
            Logging in <SpinnerMini />
          </>
        ) : (
          "Log in"
        )}
      </Button>
    </AuthFormLayout>
  );
}

export default LoginForm;
