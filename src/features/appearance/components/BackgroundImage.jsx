import { HiMiniPhoto } from "react-icons/hi2";
import FileUploadModal from "../../dashboard/components/FileUploadModal";
import { useUpdateBackgroundMedia } from "../hooks/useUpdateBackgroundMedia";

function BackgroundImage({ id, backgroundType, backgroundMedia }) {
  const { updateBackgroundMedia, isPending } = useUpdateBackgroundMedia();

  function handleUpdateBackgroundImage(media) {
    updateBackgroundMedia({ media, type: "image", id });
  }

  return (
    <FileUploadModal
      accept="image/*"
      onChange={handleUpdateBackgroundImage}
      isPending={isPending}
    >
      <div className={backgroundType === "image" ? "selected" : ""}>
        {backgroundType === "image" ? (
          <span>
            <img src={backgroundMedia} alt="Background" />
          </span>
        ) : (
          <span className="image">
            <HiMiniPhoto />
          </span>
        )}
        <p>Image</p>
      </div>
    </FileUploadModal>
  );
}

export default BackgroundImage;
