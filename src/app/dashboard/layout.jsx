import { Children } from "react";
import AdminHeader from "../components/AdminHeader";

export default function AdminLayout({ Children }) {
  return (
    <main>
      <AdminHeader />
      {Children}
    </main>
  );
}
