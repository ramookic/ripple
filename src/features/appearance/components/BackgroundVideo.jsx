import { HiMiniPhoto } from "react-icons/hi2";
import { useUpdateBackgroundMedia } from "../hooks/useUpdateBackgroundMedia";
import FileUploadModal from "../../dashboard/components/FileUploadModal";

function BackgroundVideo({ id, backgroundType, backgroundMedia }) {
  const { updateBackgroundMedia, isPending } = useUpdateBackgroundMedia();

  function handleUpdateBackgroundVideo(media) {
    updateBackgroundMedia({ media, type: "video", id });
  }

  return (
    <FileUploadModal
      accept="video/*"
      onChange={handleUpdateBackgroundVideo}
      isPending={isPending}
    >
      <div className={backgroundType === "video" ? "selected" : ""}>
        {backgroundType === "video" ? (
          <span>
            <video
              src={backgroundMedia}
              title="Background video"
              autoPlay
              muted
              loop
            ></video>
          </span>
        ) : (
          <span className="video">
            <HiMiniPhoto />
          </span>
        )}
        <p>Video</p>
      </div>
    </FileUploadModal>
  );
}

export default BackgroundVideo;
