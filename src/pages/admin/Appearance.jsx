import AdminPageLayout from "../../components/layout/AdminPageLayout";
import Heading from "../../components/ui/Heading";
import SubHeading from "../../components/ui/SubHeading";
import UserBackgrounds from "../../features/admin/components/UserBackgrounds.jsx";
import UserButtons from "../../features/admin/components/UserButtons";
import UserFonts from "../../features/admin/components/UserFonts";
import UserProfile from "../../features/admin/components/UserProfile";
import UserThemes from "../../features/admin/components/UserThemes.jsx";

function Appearance() {
  return (
    <AdminPageLayout>
      <Heading>Profile</Heading>
      <UserProfile />
      <Heading>Themes</Heading>
      <UserThemes />
      <Heading>Custom appearance</Heading>
      <SubHeading>
        Completely customize your Ripple profile. Change your background with
        colors, gradients and images. Choose a button style, change the typeface
        and more.
      </SubHeading>
      <Heading>Backgrounds</Heading>
      <UserBackgrounds />
      <Heading>Buttons</Heading>
      <UserButtons />
      <Heading>Fonts</Heading>
      <UserFonts />
    </AdminPageLayout>
  );
}

export default Appearance;
