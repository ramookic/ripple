import { useState } from "react";
import toast from "react-hot-toast";

import { useRegister } from "../hooks/useRegister";
import { useCheckUsername } from "../hooks/useCheckUsername";

import AuthFormLayout from "./AuthFormLayout";
import Input from "../../../components/form/Input";
import Button from "../../../components/ui/Button";
import SpinnerMini from "../../../components/ui/SpinnerMini";

import { RESERVED_KEYWORDS } from "../../../config";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, isPending } = useRegister();

  const { isTaken: isTakenUsername } = useCheckUsername(username);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password || !username || isTakenUsername) return;

    if (RESERVED_KEYWORDS.includes(username)) {
      toast.error("Username taken or restricted");
    }

    register(
      { username, email, password },
      {
        onSettled: () => {
          setUsername("");
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <AuthFormLayout onSubmit={handleSubmit}>
      <Input
        disabled={isPending}
        className={isTakenUsername ? "warning" : ""}
        placeholder={isTakenUsername ? "Username Taken" : "Username"}
        value={username}
        id="username"
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <Button
        className="brand"
        disabled={!email || !password || !username || isTakenUsername}
      >
        {isPending ? (
          <>
            Creating Account <SpinnerMini />
          </>
        ) : (
          "Create account"
        )}
      </Button>
      <p>
        By clicking <strong>Create account</strong>, you agree to Ripple's Terms
        and Conditions and confirm you have read our Privacy Notice. You may
        receive offers, news and updates from us.
      </p>
    </AuthFormLayout>
  );
}

export default RegisterForm;
