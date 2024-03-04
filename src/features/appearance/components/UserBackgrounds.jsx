import styled from "styled-components";
import AdminContainer from "../../dashboard/components/AdminContainer";
import tinycolor from "tinycolor2";
import { useGetAppearance } from "../hooks/useGetAppearance";
import { useUser } from "../../authentication/hooks/useUser";
import ColorPicker from "../../../components/ui/ColorPicker";
import { useUpdateAppearance } from "../hooks/useUpdateAppearance";
import UserBackgroundDirection from "./UserBackgroundDirection";
import SkeletonAdminContainer from "../../../components/skeleton/SkeletonAdminContainer";
import BackgroundVideo from "./BackgroundVideo";
import BackgroundImage from "./BackgroundImage";

const StyledUserBackgrounds = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }

  & button,
  & div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &.selected {
      & span {
        scale: 0.9;
        outline-offset: 10px;
        outline: 2px solid var(--color-grey-300);
      }
    }

    & p {
      font-size: 15px;
      font-weight: 500;
      color: var(--color-grey-600);
    }

    & span {
      height: 220px;
      width: 100%;
      border-radius: 10px;
      color: var(--color-grey-200);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 42px;
      transition: 0.3s ease;

      @media screen and (max-width: 768px) {
        height: 280px;
      }

      &.flat {
        background: var(--color-grey-700);
      }

      &.gradient {
        background: linear-gradient(
          to top,
          var(--color-grey-700),
          ${tinycolor("var(--color-grey-700)").lighten(28).toString()}
        );
      }

      & img,
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }

      &.image,
      &.video {
        border: 1px dashed var(--color-grey-400);
      }
    }
  }
`;

function UserBackgrounds() {
  const { user } = useUser();
  const { appearance, isPending } = useGetAppearance(user.id);
  const { updateAppearance } = useUpdateAppearance();

  if (isPending) return <SkeletonAdminContainer />;

  const {
    id,
    backgroundColor,
    backgroundType,
    backgroundDirection,
    backgroundMedia,
  } = appearance;

  function handleUpdateColor(color) {
    updateAppearance({
      updateData: { backgroundColor: color },
      id,
    });
  }

  function handleUpdateType(type) {
    updateAppearance({
      updateData: { backgroundType: type },
      id,
    });
  }

  function handleUpdateDirection(direction) {
    updateAppearance({
      updateData: { backgroundDirection: direction },
      id,
    });
  }

  return (
    <AdminContainer>
      <StyledUserBackgrounds>
        <button
          className={backgroundType === "flat" ? "selected" : ""}
          onClick={() => handleUpdateType("flat")}
        >
          <span className="flat"></span>
          <p>Flat Colour</p>
        </button>
        <button
          className={backgroundType === "gradient" ? "selected" : ""}
          onClick={() => handleUpdateType("gradient")}
        >
          <span className="gradient"></span>
          <p>Gradient</p>
        </button>
        <BackgroundImage
          id={id}
          backgroundType={backgroundType}
          backgroundMedia={backgroundMedia}
        />
        <BackgroundVideo
          id={id}
          backgroundType={backgroundType}
          backgroundMedia={backgroundMedia}
        />
      </StyledUserBackgrounds>
      {backgroundType === "gradient" && (
        <>
          <h4>Direction</h4>
          <UserBackgroundDirection
            direction={backgroundDirection}
            onChange={handleUpdateDirection}
          />
        </>
      )}
      {backgroundType === "flat" ||
        (backgroundType === "gradient" && (
          <>
            <h4>Color</h4>
            <ColorPicker
              value={backgroundColor}
              onChange={handleUpdateColor}
              placeholder="Color"
            />
          </>
        ))}
    </AdminContainer>
  );
}

export default UserBackgrounds;
