import styled from "styled-components";
import { useUser } from "../../authentication/hooks/useUser";
import { useGetProfile } from "../hooks/useGetProfile";
import Button from "../../../components/ui/Button";
import AdminContainer from "../../dashboard/components/AdminContainer";
import Input from "../../../components/form/Input";
import FileUploadModal from "../../dashboard/components/FileUploadModal";
import SkeletonAdminContainer from "../../../components/skeleton/SkeletonAdminContainer";
import { useUpdateProfile } from "../hooks/useUpdateProfile";
import { useUpdateProfileImage } from "../hooks/useUpdateProfileImage";

const StyledUserProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > :nth-child(1) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;

    & > img,
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--color-grey-900);
      color: var(--color-grey-0);
      font-size: 32px;
      font-weight: 600;
      width: 100px;
      height: 100px;
      border-radius: 100%;
      object-fit: cover;
    }

    & img {
      background-size: cover;
    }

    & span {
      background-size: contain;
      width: 120px;

      @media screen and (max-width: 500px) {
        width: 150px;
      }
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
    margin-bottom: -10px;
  }

  & > :nth-child(3) {
    padding-top: 20px;
    border-top: 1px solid var(--color-grey-200);
  }
`;

function UserProfile() {
  const { user } = useUser();
  const { profile, isPending } = useGetProfile(user.id);
  const { updateProfile } = useUpdateProfile();
  const { updateProfileImage, isPending: isPendingProfileImage } =
    useUpdateProfileImage();

  if (isPending) return <SkeletonAdminContainer />;

  const { profileTitle, profileImage, username, bio, id } = profile;

  function updateProfileTitle(value) {
    updateProfile({
      updateData: { profileTitle: value },
      id,
    });
  }

  function updateProfileBio(value) {
    updateProfile({
      updateData: { bio: value },
      id,
    });
  }

  function updateImage(image) {
    updateProfileImage({ image, id });
  }

  function removeImage() {
    updateProfile({
      updateData: {
        profileImage: "",
      },
      id,
    });
  }

  return (
    <AdminContainer>
      <StyledUserProfile>
        <div>
          {profileImage ? (
            <img src={profileImage} alt={`avatar${profileImage}`} />
          ) : (
            <span>{username.split("")[0].toUpperCase()}</span>
          )}
          <div>
            <FileUploadModal
              accept="image/*"
              onChange={updateImage}
              isPending={isPendingProfileImage}
            >
              <Button className="brand">Pick an image</Button>
            </FileUploadModal>
            <Button
              className="secondary"
              disabled={!profileImage}
              onClick={removeImage}
            >
              Remove
            </Button>
          </div>
        </div>
        <div>
          <Input
            placeholder="Profile Title"
            value={profileTitle}
            onChange={updateProfileTitle}
            debounce
          />
          <Input
            placeholder="Profile Bio"
            value={bio}
            onChange={updateProfileBio}
            debounce
            textbox
          />
        </div>
        <div>
          <Button className="secondary" to="/admin/settings">
            + Add Social Icons
          </Button>
        </div>
      </StyledUserProfile>
    </AdminContainer>
  );
}

export default UserProfile;
