import ColorPicker from "../../../components/ui/ColorPicker";
import SpinnerMini from "../../../components/ui/SpinnerMini";
import { useUser } from "../../authentication/hooks/useUser";
import { useGetAppearance } from "../hooks/useGetAppearance";
import { useUpdateAppearance } from "../hooks/useUpdateAppearance";
import AdminContainer from "./AdminContainer";
import SelectFontModal from "./SelectFontModal";

function UserFonts() {
  const { user } = useUser();
  const { appearance, isPending } = useGetAppearance(user.id);
  const { updateAppearance } = useUpdateAppearance();

  if (isPending)
    return <SpinnerMini color="var(--color-green-500)" size={28} />;

  const { id, fontColor, font } = appearance;

  function handleUpdateFontColor(color) {
    updateAppearance({
      updateData: { fontColor: color },
      id,
    });
  }

  function handleUpdateFont(font) {
    updateAppearance({
      updateData: { font },
      id,
    });
  }

  return (
    <AdminContainer>
      <h4>Font</h4>
      <SelectFontModal font={font} onChange={handleUpdateFont} />
      <h4>Color</h4>
      <ColorPicker
        value={fontColor}
        onChange={handleUpdateFontColor}
        placeholder="Color"
      />
    </AdminContainer>
  );
}

export default UserFonts;
