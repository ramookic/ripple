import styled from "styled-components";
import ColorPicker from "../../../components/ui/ColorPicker";
import { useUser } from "../../authentication/hooks/useUser";
import { useGetAppearance } from "../hooks/useGetAppearance";
import { useUpdateAppearance } from "../hooks/useUpdateAppearance";
import AdminContainer from "../../dashboard/components/AdminContainer";
import SkeletonAdminContainer from "../../../components/skeleton/SkeletonAdminContainer";

const StyledUserButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & button {
    height: 40px;
    width: 100%;

    &.selected {
      scale: 0.9;
      outline-offset: 10px;
      outline: 2px solid var(--color-grey-300);
      border-radius: 4px;
    }
  }

  & div {
    display: flex;
    gap: 20px;

    &.fill {
      & button {
        background: var(--color-grey-800);
      }
    }

    &.outline {
      & button {
        border: 1px solid var(--color-grey-800);
      }
    }

    &.softShadow {
      & button {
        box-shadow: var(--color-grey-500) 0px 4px 24px -14px;
      }
    }

    &.hardShadow {
      & button {
        border: 1px solid var(--color-grey-800);
        box-shadow: 6px 6px var(--color-grey-800);
      }
    }

    & > :nth-child(2) {
      border-radius: 10px;
    }

    & > :nth-child(3) {
      border-radius: 50px;
    }
  }
`;

function UserButtons() {
  const { user } = useUser();
  const { appearance, isPending } = useGetAppearance(user.id);
  const { updateAppearance } = useUpdateAppearance();

  if (isPending) return <SkeletonAdminContainer />;

  const {
    id,
    buttonsType,
    buttonsRounded,
    buttonsBackgroundColor,
    buttonsFontColor,
    buttonsShadowColor,
  } = appearance;

  function handleUpdateBackgroundColor(color) {
    updateAppearance({
      updateData: { buttonsBackgroundColor: color },
      id,
    });
  }

  function handleUpdateFontColor(color) {
    updateAppearance({
      updateData: { buttonsFontColor: color },
      id,
    });
  }

  function handleUpdateShadowColor(color) {
    updateAppearance({
      updateData: { buttonsShadowColor: color },
      id,
    });
  }

  function updateButtonType(type, rounded) {
    updateAppearance({
      updateData: { buttonsType: type, buttonsRounded: rounded },
      id,
    });
  }

  return (
    <AdminContainer>
      <StyledUserButtons>
        <h4>Fill</h4>
        <div className="fill">
          <button
            className={
              buttonsType === "fill" && buttonsRounded === "" ? "selected" : ""
            }
            onClick={() => updateButtonType("fill", "")}
          />
          <button
            className={
              buttonsType === "fill" && buttonsRounded === "semiRounded"
                ? "selected"
                : ""
            }
            onClick={() => updateButtonType("fill", "semiRounded")}
          />
          <button
            className={
              buttonsType === "fill" && buttonsRounded === "rounded"
                ? "selected"
                : ""
            }
            onClick={() => updateButtonType("fill", "rounded")}
          />
        </div>
        <h4>Outline</h4>
        <div className="outline">
          <button
            className={
              buttonsType === "outline" && buttonsRounded === ""
                ? "selected"
                : ""
            }
            onClick={() => updateButtonType("outline", "")}
          />
          <button
            className={
              buttonsType === "outline" && buttonsRounded === "semiRounded"
                ? "selected"
                : ""
            }
            onClick={() => updateButtonType("outline", "semiRounded")}
          />
          <button
            className={
              buttonsType === "outline" && buttonsRounded === "rounded"
                ? "selected"
                : ""
            }
            onClick={() => updateButtonType("outline", "rounded")}
          />
        </div>
        <h4>Soft shadow</h4>
        <div className="softShadow">
          <button
            className={
              buttonsType === "softShadow" && buttonsRounded === ""
                ? "selected"
                : ""
            }
            onClick={() => updateButtonType("softShadow", "")}
          />
          <button
            className={
              buttonsType === "softShadow" && buttonsRounded === "semiRounded"
                ? "selected"
                : ""
            }
            onClick={() => updateButtonType("softShadow", "semiRounded")}
          />
          <button
            className={
              buttonsType === "softShadow" && buttonsRounded === "rounded"
                ? "selected"
                : ""
            }
            onClick={() => updateButtonType("softShadow", "rounded")}
          />
        </div>
        <h4>Hard shadow</h4>
        <div className="hardShadow">
          <button
            className={
              buttonsType === "hardShadow" && buttonsRounded === ""
                ? "selected"
                : ""
            }
            onClick={() => updateButtonType("hardShadow", "")}
          />
          <button
            className={
              buttonsType === "hardShadow" && buttonsRounded === "semiRounded"
                ? "selected"
                : ""
            }
            onClick={() => updateButtonType("hardShadow", "semiRounded")}
          />
          <button
            className={
              buttonsType === "hardShadow" && buttonsRounded === "rounded"
                ? "selected"
                : ""
            }
            onClick={() => updateButtonType("hardShadow", "rounded")}
          />
        </div>
      </StyledUserButtons>
      <h4>Button Color</h4>
      <ColorPicker
        value={buttonsBackgroundColor}
        onChange={handleUpdateBackgroundColor}
        placeholder="Button color"
      />
      <h4>Button Font Color</h4>
      <ColorPicker
        value={buttonsFontColor}
        onChange={handleUpdateFontColor}
        placeholder="Button font color"
      />
      {buttonsType === "softShadow" || buttonsType === "hardShadow" ? (
        <>
          <h4>Shadow Color</h4>
          <ColorPicker
            value={buttonsShadowColor}
            onChange={handleUpdateShadowColor}
            placeholder="Shadow Color"
          />
        </>
      ) : (
        ""
      )}
    </AdminContainer>
  );
}

export default UserButtons;
