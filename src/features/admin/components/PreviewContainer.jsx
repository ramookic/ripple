import styled from "styled-components";

import UserTreeBackground from "../../userTree/components/UserTreeBackground";
import { useUser } from "../../authentication/hooks/useUser";
import { useGetProfile } from "../hooks/useGetProfile";
import { useGetAppearance } from "../hooks/useGetAppearance";

import UserTreeHeader from "../../userTree/components/UserTreeHeader";
import UserTreeLinkList from "../../userTree/components/UserTreeLinkList";
import { useGetLinks } from "../hooks/useGetLinks";

const StyledPreviewContainer = styled.div`
  font-family: ${(props) => props.$font}, "sans-serif";
  border: 16px solid var(--color-grey-900);
  border-radius: 50px;
  max-height: 720px;
  height: 100vh;
  max-width: 340px;
  width: 100%;

  ${UserTreeBackground}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 40px 20px;
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
    opacity: 0;
  }
`;

function PreviewContainer() {
  const { user } = useUser();
  const { links, isPending: isPendingLinks } = useGetLinks(user.id);
  const { profile, isPending: isPendingProfile } = useGetProfile(user.id);
  const { appearance, isPending: isPendingAppearance } = useGetAppearance(
    user.id
  );

  if (isPendingLinks || isPendingProfile || isPendingAppearance) return null;

  return (
    <StyledPreviewContainer
      className={appearance.backgroundType}
      $font={appearance.font}
      $direction={appearance.backgroundDirection}
      $backgroundImage={appearance.backgroundImage}
      $backgroundColor={appearance.backgroundColor}
      $fontColor={appearance.fontColor}
    >
      <Container>
        <UserTreeHeader
          isPreview
          fontColor={appearance.fontColor}
          profileImage={profile.profileImage}
          profileTitle={profile.profileTitle}
          bio={profile.bio}
          username={profile.username}
        />
        <UserTreeLinkList isPreview links={links} appearance={appearance} />
      </Container>
    </StyledPreviewContainer>
  );
}

export default PreviewContainer;
