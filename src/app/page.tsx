"use client";
import React, { useEffect } from "react";
import WithAuth from "@/components/WithAuth";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const router = useRouter();
  // useEffect(() => {}, [third]);
  router.push("/dashboard");
  return (
    <main>
      <div></div>
    </main>
  );
};

const AuthenticatedHome = WithAuth(Home);

export default AuthenticatedHome;
