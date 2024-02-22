import styled from "styled-components";
import { useUser } from "../../authentication/hooks/useUser";
import { useGetProfile } from "../hooks/useGetProfile";
import Button from "../../../components/ui/Button";
import AdminContainer from "./AdminContainer";
import Input from "../../../components/form/Input";
import FileUploadModal from "./FileUploadModal";
import SkeletonAdminContainer from "../../../components/skeleton/SkeletonAdminContainer";

const StyledUserProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > :nth-child(1) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;

    & > button {
      background: ${(props) =>
        props.$profileImage
          ? `url(${props.$profileImage})`
          : "var(--color-grey-900)"};
      color: var(--color-grey-0);
      font-size: 32px;
      font-weight: 600;
      width: 120px;
      height: 100px;
      border-radius: 100%;
    }

    & div {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;
    }
  }

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

function UserProfile() {
  const { user } = useUser();
  const { profile, isPending } = useGetProfile(user.id);

  if (isPending) return <SkeletonAdminContainer />;

  const { profileTitle, profileImage, username, bio } = profile;

  function updateProfile(value) {}

  return (
    <AdminContainer>
      <StyledUserProfile>
        <div>
          {profileImage ? (
            <button $profileImage={profileImage} />
          ) : (
            <button>{username.split("")[0].toUpperCase()}</button>
          )}
          <div>
            <FileUploadModal>
              <Button className="brand">Pick an image</Button>
            </FileUploadModal>
            <Button className="secondary" disabled>
              Remove
            </Button>
          </div>
        </div>
        <div>
          <Input
            placeholder="Profile Title"
            value={profileTitle}
            onChange={updateProfile}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="4"
            placeholder="Bio"
            value={bio || ""}
            onChange={updateProfile}
          ></textarea>
        </div>
      </StyledUserProfile>
    </AdminContainer>
  );
}

export default UserProfile;
