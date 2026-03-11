"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PageHeader() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      {/* ---HEADER--- */}
      <div
        className="flex gap-3 items-center ml-2 mt-1 cursor-pointer"
        onClick={handleClick}
      >
        <Image
          className="object-cover"
          src="/images/logo/Logo_Main.png"
          width={70}
          height={70}
          alt="Logo Cover"
        ></Image>
        <h1 className="font-bold text-3xl text-blue-950">
          Privy <span className="text-green-800">Pad</span>
        </h1>
      </div>
    </>
  );
}
