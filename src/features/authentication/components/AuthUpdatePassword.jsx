import styled from "styled-components";
import Input from "../../../components/form/Input";
import { useUpdatePassword } from "../hooks/useUpdatePassword";
import Button from "../../../components/ui/Button";
import { useState } from "react";
import SpinnerMini from "../../../components/ui/SpinnerMini";

const StyledAuthUpdatePassword = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function AuthUpdatePassword() {
  const { update, isPending } = useUpdatePassword();

  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  function handleUpdate(e) {
    e.preventDefault();

    update(
      { password },
      {
        onSettled: () => {
          setPassword("");
          setPasswordRepeat("");
        },
      }
    );
  }

  return (
    <StyledAuthUpdatePassword onSubmit={handleUpdate}>
      <Input
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        isPassword
      />
      <Input
        placeholder={
          !passwordRepeat || password === passwordRepeat
            ? "Repeat Password"
            : "Paswords need to match"
        }
        className={
          !passwordRepeat || password === passwordRepeat ? "" : "warning"
        }
        value={passwordRepeat}
        onChange={(e) => setPasswordRepeat(e.target.value)}
        isPassword
      />
      <Button
        className="brand"
        disabled={!password || password !== passwordRepeat}
      >
        {isPending ? (
          <>
            Updating <SpinnerMini />
          </>
        ) : (
          "Update"
        )}
      </Button>
    </StyledAuthUpdatePassword>
  );
}

export default AuthUpdatePassword;
