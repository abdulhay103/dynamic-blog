import Link from "next/link";

export default function Header() {
  return (
    <header className=" w-full bg-white border-sky-200 border-b-2">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link className=" text-orange-500 hover:text-sky-500" href="/">
            Dynamic Blog
          </Link>
        </div>
        <div className="flex gap-6">
          <Link
            className=" py-2 px-4 text-sky-500 hover:text-orange-500 hover:underline transition duration-100"
            href="/"
          >
            Home
          </Link>
        </div>
        <div className=" flex gap-5">
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
      </div>
    </header>
  );
}
