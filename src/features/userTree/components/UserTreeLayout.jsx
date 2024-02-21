import styled from "styled-components";
import { useParams } from "react-router-dom";
import { SiLinktree } from "react-icons/si";

import UserTreeBackground from "./UserTreeBackground";
import UserTreeHeader from "./UserTreeHeader";
import UserTreeScrollHeader from "./UserTreeScrollHeader";
import UserTreeLinkList from "./UserTreeLinkList";
import Button from "../../../components/ui/Button";

import { useUserTree } from "../hooks/useUserTree";

const StyledUserTreeLayout = styled.div`
  min-height: 100vh;
  font-family: ${(props) => props.$font}, "sans-serif";

  ${UserTreeBackground}

  & > div {
    max-width: 42rem;
    margin: 0 auto;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (max-width: 44rem) {
      padding: 4rem 10px;
    }
  }
`;

function UserTreeLayout() {
  const { username } = useParams();
  const { data, isPending } = useUserTree(username);

  if (isPending) return;

  const {
    username: usernameDb,
    profileImage,
    profileTitle,
    bio,
    appearance,
    links,
  } = data;

  return (
    <StyledUserTreeLayout
      className={appearance.backgroundType}
      $font={appearance.font}
      $direction={appearance.backgroundDirection}
      $backgroundImage={appearance.backgroundImage}
      $backgroundColor={appearance.backgroundColor}
      $fontColor={appearance.fontColor}
    >
      <div>
        <UserTreeScrollHeader
          fontColor={appearance.fontColor}
          profileImage={profileImage}
          profileTitle={profileTitle}
          username={usernameDb}
        />
        <UserTreeHeader
          fontColor={appearance.fontColor}
          profileImage={profileImage}
          profileTitle={profileTitle}
          bio={bio}
          username={usernameDb}
        />
        <UserTreeLinkList links={links} appearance={appearance} />
        {/* <UserTreeSocialIcons data={data} /> */}
        <Button className="fit-content light" to="/register">
          <SiLinktree /> Create your Ripple
        </Button>
      </div>
    </StyledUserTreeLayout>
  );
}

export default UserTreeLayout;
