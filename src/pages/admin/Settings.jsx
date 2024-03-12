import AdminPageLayout from "../../components/layout/AdminPageLayout";
import Heading from "../../components/ui/Heading";
import SettingsAccount from "../../features/settings/components/SettingsAccount";
import UserSocialIcons from "../../features/socialIcons/components/UserSocialIcons";

function Settings() {
  return (
    <AdminPageLayout>
      <Heading>Social icons</Heading>
      <UserSocialIcons />
      <Heading>My Information</Heading>
      <SettingsAccount />
    </AdminPageLayout>
  );
}

export default Settings;
