"use client";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative h-screen w-full">
      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col h-full w-full items-center justify-start">
        <div className="relative h-100 w-100 overflow-hidden rounded-2xl mt-5">
          <Image
            src="/images/not-found.webp"
            fill
            className="object-cover [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"
            alt="404 Image"
          />
        </div>
        <h1 className="text-8xl font-bold text-gray-700 my-3 flex flex-col items-center gap-2">
          404 <span className="text-2xl">Page Not Found</span>
        </h1>

        <p className="text-gray-400">
          The page you are trying to find doesn't exist.
        </p>

        <Link href="/">
          <button className="border px-4 py-2 mt-3 border-blue-600 rounded-full text-blue-600 font-medium cursor-pointer hover:bg-gray-300 hover:text-blue-700 hover:scale-[0.95] transition-all duration-200">
            Go to home
          </button>
        </Link>
      </div>
    </div>
  );
}
