"use client";
import { ArrowBigLeft, ArrowBigRight, X } from "lucide-react";
import Image from "next/image";

export default function ImageModel({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) {
  return (
    <>
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white text-3xl font-bold cursor-pointer hover:bg-red-600 p-2 rounded-full transition-all duration-300"
        >
          <X />
        </button>

        {/* LEFT BUTTON */}
        <button
          onClick={onPrev}
          className="absolute left-5 text-white text-4xl cursor-pointer hover:bg-gray-200 p-2 rounded-full hover:text-black transition-all duration-300"
        >
          <ArrowBigLeft />
        </button>

        {/* IMAGE */}
        <div className="relative w-[90vw] h-[85vh]">
          <Image
            src={images[currentIndex]}
            alt="Fullscreen property image"
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={onNext}
          className="absolute right-5 text-white text-4xl cursor-pointer hover:bg-gray-200 p-2 rounded-full hover:text-black transition-all duration-300"
        >
          <ArrowBigRight />
        </button>
      </div>
    </>
  );
}
