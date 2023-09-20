import AdminHeader from "@/app/components/AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
}
