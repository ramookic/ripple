import AdminPageLayout from "../../components/layout/AdminPageLayout";
import AdminCreateLink from "../../features/admin/components/AdminCreateLink";
import UserLinks from "../../features/admin/components/UserLinks";

function Admin() {
  return (
    <AdminPageLayout>
      <AdminCreateLink />
      <UserLinks />
    </AdminPageLayout>
  );
}

export default Admin;
