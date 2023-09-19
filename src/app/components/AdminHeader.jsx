import Link from "next/link";

export default function AdminHeader() {
  return (
    <div className="flex justify-center gap-5 w-full py-3">
      <Link href="/dashboard/admin/create-blog">Blogs </Link>
      <Link href="/dashboard/admin/create-blog">Create Blog</Link>
      <Link href="/dashboard/admin/create-blog">Setup</Link>
    </div>
  );
}
