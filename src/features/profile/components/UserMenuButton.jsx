import styled from "styled-components";
import { useUser } from "../../authentication/hooks/useUser";
import { useGetProfile } from "../hooks/useGetProfile";
import SpinnerMini from "../../../components/ui/SpinnerMini";

const StyledUserMenuButton = styled.button`
  outline-offset: 4px;

  &:hover {
    outline: 2px solid var(--color-grey-200);
  }

  &:focus {
    outline: 2px solid var(--color-grey-900);
  }

  &.button {
    background: var(--color-grey-800);
    color: var(--color-grey-0);
    width: 40px;
    height: 40px;
    border-radius: 50px;
    font-weight: 600;
  }
`;

function UserMenuButton() {
  const { user } = useUser();
  const { profile, isPending } = useGetProfile(user.id);

  if (isPending)
    return <SpinnerMini color="var(--color-green-500)" size={28} />;

  const { profileImage, username } = profile;

  return (
    <StyledUserMenuButton className={profileImage ? "image" : "button"}>
      {profileImage ? (
        <img src={profileImage} alt={username + "avatar"} />
      ) : (
        username.split("")[0].toUpperCase()
      )}
    </StyledUserMenuButton>
  );
}

export default UserMenuButton;
