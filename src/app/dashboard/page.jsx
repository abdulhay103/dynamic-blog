"use client";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data, status } = useSession();
  return (
    <div className=" pt-4">
      <h2>Dashboard Page for {data.user.email}</h2>
    </div>
  );
}
