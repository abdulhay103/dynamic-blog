import AdminHeader from "../components/AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <main>
      <AdminHeader />
      {children}
    </main>
  );
}
