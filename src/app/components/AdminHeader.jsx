import Link from "next/link";

export default function AdminHeader() {
  return (
    <div className="flex justify-center gap-5 w-full py-3">
      <Link
        className=" text-orange-500 hover:underline hover:text-blue-500"
        href="/dashboard/admin"
      >
        Admin
      </Link>
      <Link
        className=" text-orange-500 hover:underline hover:text-blue-500"
        href="/dashboard/admin/blog/create"
      >
        Create Blog
      </Link>
      <Link
        className=" text-orange-500 hover:underline hover:text-blue-500"
        href="/dashboard/admin/blog/list"
      >
        Blogs List
      </Link>
    </div>
  );
}
