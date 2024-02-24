import AdminPageLayout from "../../components/layout/AdminPageLayout";
import UserCreateLink from "../../features/links/components/UserCreateLink";
import UserLinks from "../../features/links/components/UserLinks";

function Links() {
  return (
    <AdminPageLayout>
      <UserCreateLink />
      <UserLinks />
    </AdminPageLayout>
  );
}

export default Links;
