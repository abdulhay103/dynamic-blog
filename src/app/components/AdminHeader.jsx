import Link from "next/link";

export default function AdminHeader() {
  return (
    <div className="flex justify-center gap-5 w-full py-3">
      <Link
        className=" text-orange-500 hover:underline hover:text-blue-500"
        href="/dashboard/admin/blogs"
      >
        Blogs{" "}
      </Link>
      <Link
        className=" text-orange-500 hover:underline hover:text-blue-500"
        href="/dashboard/admin/create-blog"
      >
        Create Blog
      </Link>
      <Link
        className=" text-orange-500 hover:underline hover:text-blue-500"
        href="/dashboard/admin/setup"
      >
        Setup
      </Link>
    </div>
  );
}
