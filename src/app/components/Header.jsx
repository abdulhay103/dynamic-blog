import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data, status } = useSession();
  console.log("session Data==>", data, "status==>", status);

  return (
    <header className=" w-full fixed bg-white border-sky-200 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link className=" text-orange-500 hover:text-sky-500" href="/">
            Dynamic Blog
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            className=" py-2 px-4 text-sky-500 hover:text-orange-500 hover:underline transition duration-100"
            href="/"
          >
            Home
          </Link>
          <Link
            className=" py-2 px-4 text-sky-500 hover:text-orange-500 hover:underline transition duration-100"
            href="/about"
          >
            About
          </Link>
          <Link
            className=" py-2 px-4 text-sky-500 hover:text-orange-500 hover:underline transition duration-100"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className=" py-2 px-4 text-sky-500 hover:text-orange-500 hover:underline transition duration-100"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        {status === "authenticated" ? (
          <div className=" flex gap-4 items-center">
            <Link
              className=" py-2 px-4 text-sky-500 hover:text-orange-500 hover:underline transition duration-100"
              href={`/dashboard/${
                data?.user?.role === "admin" ? "admin" : "user"
              }`}
            >
              {data?.user?.name} ({data?.user?.role})
            </Link>
            {data.user.image ? (
              <div className=" w-8 h-8 rounded-full overflow-hidden">
                <img src={data.user.image} alt="user" />
              </div>
            ) : (
              ""
            )}
            <a
              onClick={() => {
                signOut({ callbackUrl: "/login" });
              }}
              className=" cursor-pointer py-2 px-4 text-sky-500 hover:text-orange-500 hover:underline transition duration-100"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className=" flex gap-4">
            <Link
              className=" py-2 px-4 text-sky-500 hover:text-orange-500 hover:underline transition duration-100"
              href="/login"
            >
              Login
            </Link>
            <Link
              className=" py-2 px-4 text-sky-500 hover:text-orange-500 hover:underline transition duration-100"
              href="/register"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
