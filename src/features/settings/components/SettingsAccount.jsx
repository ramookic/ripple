import styled from "styled-components";
import Input from "../../../components/form/Input";
import { useUser } from "../../authentication/hooks/useUser";
import AdminContainer from "../../dashboard/components/AdminContainer";
import Heading from "../../../components/ui/Heading";
import AuthUpdatePassword from "../../authentication/components/AuthUpdatePassword";

const StyledSettingsAccount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & p {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    color: var(--color-grey-400);
  }
`;

function SettingsAccount() {
  const { user } = useUser();

  return (
    <AdminContainer>
      <StyledSettingsAccount>
        <div>
          <Input value={user.email} placeholder="Email" disabled />
          <p>Your email can't be changed</p>
        </div>
        <Heading style={{ fontSize: "16px" }}>Change Password</Heading>
        <AuthUpdatePassword />
      </StyledSettingsAccount>
    </AdminContainer>
  );
}

export default SettingsAccount;
