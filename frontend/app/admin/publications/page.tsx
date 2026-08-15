import { AdminContentManager } from "../../../components/admin/admin-content-manager";

export default function AdminPublicationsPage() {
  return (
    <AdminContentManager
      type="publication"
      title="Publications"
      description="Manage publication records shown on the homepage, the Notice & Media page, and the Facilities publication page."
    />
  );
}
