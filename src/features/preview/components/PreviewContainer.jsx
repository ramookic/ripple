import styled from "styled-components";

import UserTreeBackground from "../../userTree/components/UserTreeBackground";
import { useUser } from "../../authentication/hooks/useUser";

import UserTreeHeader from "../../userTree/components/UserTreeHeader";
import UserTreeLinkList from "../../userTree/components/UserTreeLinkList";
import SpinnerMini from "../../../components/ui/SpinnerMini";
import UserTreeSocialIcons from "../../userTree/components/UserTreeSocialIcons";
import { useGetProfile } from "../../profile/hooks/useGetProfile";
import { useGetSocialIcons } from "../../socialIcons/hooks/useGetSocialIcons";
import { useGetAppearance } from "../../appearance/hooks/useGetAppearance";
import { useGetLinks } from "../../links/hooks/useGetLinks";

const StyledPreviewContainer = styled.div`
  font-family: ${(props) => props.$font}, "sans-serif";
  border: 16px solid var(--color-grey-900);
  border-radius: 50px;
  max-height: 720px;
  height: 100vh;
  max-width: 340px;
  width: 100%;
  position: relative;

  & video {
    max-width: 310px;
    max-height: 690px;
    border-radius: 32px;
  }

  & video,
  & > .backgroundImage {
    max-width: 310px;
    max-height: 690px;
    border-radius: 32px;
  }

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
  const { socialIcons, isPending: isPendingSocialIcons } = useGetSocialIcons(
    user.id
  );

  if (
    isPendingLinks ||
    isPendingProfile ||
    isPendingAppearance ||
    isPendingSocialIcons
  )
    return <SpinnerMini color="var(--color-green-500)" size={28} />;

  return (
    <StyledPreviewContainer
      className={appearance.backgroundType}
      $font={appearance.font}
      $direction={appearance.backgroundDirection}
      $backgroundMedia={appearance.backgroundMedia}
      $backgroundColor={appearance.backgroundColor}
      $fontColor={appearance.fontColor}
    >
      {appearance.backgroundType === "video" && (
        <video
          src={appearance.backgroundMedia}
          title="Background video"
          autoPlay
          muted
          loop
        ></video>
      )}

      {appearance.backgroundType === "image" && (
        <img
          className="backgroundImage"
          src={appearance.backgroundMedia}
          alt="Background"
        ></img>
      )}
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
        <UserTreeSocialIcons
          icons={socialIcons}
          backgroundColor={appearance.backgroundColor}
        />
      </Container>
    </StyledPreviewContainer>
  );
}

export default PreviewContainer;
