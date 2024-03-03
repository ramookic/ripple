import styled from "styled-components";
import { useUser } from "../../authentication/hooks/useUser";
import { useGetProfile } from "../hooks/useGetProfile";
import SpinnerMini from "../../../components/ui/SpinnerMini";

const StyledUserMenuButton = styled.button`
  outline-offset: 4px;
  background-color: var(--color-grey-800);
  color: var(--color-grey-0);
  width: 40px;
  height: 40px;
  border-radius: 50px;
  font-weight: 600;

  &:hover {
    outline: 2px solid var(--color-grey-200);
  }

  &:focus {
    outline: 2px solid var(--color-grey-900);
  }

  & img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    border-radius: 50%;
  }
`;

function UserMenuButton() {
  const { user } = useUser();
  const { profile, isPending } = useGetProfile(user.id);

  if (isPending)
    return <SpinnerMini color="var(--color-green-500)" size={28} />;

  const { profileImage, username } = profile;

  return (
    <StyledUserMenuButton>
      {profileImage ? (
        <img src={profileImage} alt={username + "avatar"} />
      ) : (
        username.split("")[0].toUpperCase()
      )}
    </StyledUserMenuButton>
  );
}

export default UserMenuButton;
