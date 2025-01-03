"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      router.push("/signup");
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  });
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen animate-pulse">
      <Image
        src="/logo1.svg"
        className=""
        alt="logo"
        width={200}
        height={200}
      />
    </div>
  );
}
