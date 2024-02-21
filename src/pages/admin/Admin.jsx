import AdminPageLayout from "../../components/layout/AdminPageLayout";
import AdminCreateLink from "../../features/admin/components/AdminCreateLink";
import AdminLinks from "../../features/admin/components/AdminLinks";

function Admin() {
  return (
    <AdminPageLayout>
      <AdminCreateLink />
      <AdminLinks />
    </AdminPageLayout>
  );
}

export default Admin;
