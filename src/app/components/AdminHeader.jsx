import Link from "next/link";

export default function AdminHeader() {
  return (
    <div className=" w-full bg-slate-500 py-3">
      <Link href="/dashboard/admin/create-blog">Create Blog</Link>
    </div>
  );
}
