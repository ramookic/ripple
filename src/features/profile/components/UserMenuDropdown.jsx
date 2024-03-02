import Dropdown from "../../../components/dropdown/Dropdown";
import UserMenuButton from "./UserMenuButton";
import UserMenuContent from "./UserMenuContent";

function UserMenuDropdown() {
  return (
    <Dropdown
      buttonContent={<UserMenuButton />}
      dropdownContent={<UserMenuContent />}
    />
  );
}

export default UserMenuDropdown;
