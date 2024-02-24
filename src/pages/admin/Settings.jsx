import AdminPageLayout from "../../components/layout/AdminPageLayout";
import Heading from "../../components/ui/Heading";
import UserSocialIcons from "../../features/socialIcons/components/UserSocialIcons";

function Settings() {
  return (
    <AdminPageLayout>
      <Heading>Social icons</Heading>
      <UserSocialIcons />
    </AdminPageLayout>
  );
}

export default Settings;
