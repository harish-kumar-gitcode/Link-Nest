"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowBigRight, ArrowBigLeft } from "lucide-react";
import ImageModel from "./ImageModel";

export default function Gallery({ images, title, price }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const totalImages = images.length;
  const remainingCount = totalImages - 2;

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* MOBILE SWIPE GALLERY (Visible only on small screens) */}
      <div className="md:hidden relative w-full overflow-hidden md:rounded-2xl h-60">
        <div className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide gap-0">
          {images.map((img, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-full h-[300px] relative"
            >
              <Image
                src={img}
                alt={`Property image ${index + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
              {/* Image Counter Badge for Mobile */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
                {index + 1} / {totalImages}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP MAIN IMAGE (Visible md: and up) */}
      <div
        className="hidden md:block relative w-full h-[400px] hover:cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={images[currentIndex]}
          alt="Property image"
          fill
          className="object-cover rounded-2xl"
          sizes="100vw"
          priority
        />

        {/* LEFT BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevImage();
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ArrowBigLeft />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ArrowBigRight />
        </button>
      </div>

      {/* THUMBNAILS & INFO ROW */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mt-4 px-2 md:px-0">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-4xl font-medium">{title}</h1>
          <p className="text-green-600 font-semibold text-2xl md:text-4xl">
            ₹ {price.toLocaleString("en-IN")}
          </p>
        </div>

        {/* THUMBNAILS (Hidden on very small screens, visible md:) */}
        <div className="hidden md:flex gap-3">
          {(showAll ? images : images.slice(0, 2)).map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-[90px] h-[70px] rounded-lg overflow-hidden border-2 transition-all ${
                images[currentIndex] === img
                  ? "border-blue-500 scale-105"
                  : "border-gray-200"
              }`}
            >
              <Image
                src={img}
                alt="Thumbnail"
                fill
                className="object-cover"
                sizes="100px"
              />
            </button>
          ))}

          {!showAll && remainingCount > 0 && (
            <button
              onClick={() => setShowAll(true)}
              className="w-[90px] h-[70px] flex items-center justify-center rounded-lg border-2 border-gray-300 text-sm font-semibold bg-gray-100 hover:bg-gray-200"
            >
              +{remainingCount}
            </button>
          )}
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <ImageModel
          images={images}
          currentIndex={currentIndex}
          onClose={() => setIsOpen(false)}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}
