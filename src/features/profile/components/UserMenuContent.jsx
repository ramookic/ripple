import styled from "styled-components";
import SkeletonAdminContainer from "../../../components/skeleton/SkeletonAdminContainer";
import Button from "../../../components/ui/Button";
import { DOMAIN_NAME } from "../../../config";
import { useLogout } from "../../authentication/hooks/useLogout";
import { useUser } from "../../authentication/hooks/useUser";
import { useGetProfile } from "../hooks/useGetProfile";

const StyledUserMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & a {
    display: flex;
    color: var(--color-grey-600);
    width: 100%;
    padding: 14px 20px;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 500;

    &:hover {
      background: var(--color-grey-100);
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & div {
    display: flex;
    flex-direction: column;

    & img,
    span {
      width: 44px;
      height: 44px;

      border-radius: 50px;
    }

    & span {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-grey-800);
      color: var(--color-grey-0);
      font-weight: 600;
    }

    & p {
      font-size: 14px;
    }
  }
`;

function UserMenuContent() {
  const { logout } = useLogout();
  const { user } = useUser();
  const { profile, isPending } = useGetProfile(user.id);

  if (isPending) return <SkeletonAdminContainer />;

  const { profileImage, username } = profile;

  return (
    <StyledUserMenuContent>
      <Header>
        <div>
          {profileImage ? (
            <img src={profileImage} alt={username + "avatar"} />
          ) : (
            <span>{username.split("")[0].toUpperCase()}</span>
          )}
        </div>
        <div>
          <h4>{"@" + username}</h4>
          <p>{`${DOMAIN_NAME}/${username}`}</p>
        </div>
      </Header>
      <Button className="secondary" onClick={logout}>
        Sign out
      </Button>
    </StyledUserMenuContent>
  );
}

export default UserMenuContent;
