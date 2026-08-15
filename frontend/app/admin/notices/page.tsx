import { AdminContentManager } from "../../../components/admin/admin-content-manager";

export default function AdminNoticesPage() {
  return (
    <AdminContentManager
      type="notice"
      title="Notice Board"
      description="Create, update, and remove Notice Board entries. These items will feed the public homepage and the Notice & Media page."
    />
  );
}
