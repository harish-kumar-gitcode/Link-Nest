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
      {/* MAIN IMAGE */}
      <div
        className="relative w-full h-[400px] hover:cursor-pointer"
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
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-100 text-black p-2 rounded-full hover:cursor-pointer"
        >
          <ArrowBigLeft />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-100 text-black p-2 rounded-full hover:cursor-pointer"
        >
          <ArrowBigRight />
        </button>
      </div>

      {/* THUMBNAILS ROW */}
      <div className="flex justify-between gap-3 mt-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-medium">{title}</h1>
          <p className="text-green-600 font-semibold text-4xl">
            ₹ {price.toLocaleString("en-IN")}
          </p>
        </div>
        <div className="flex gap-3">
          {(showAll ? images : images.slice(0, 2)).map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-[90px] h-[70px] rounded-lg overflow-hidden border-2 ${
                images[currentIndex] === img
                  ? "border-blue-500"
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

          {/* n+ MORE */}
          {!showAll && remainingCount > 0 && (
            <button
              onClick={() => setShowAll(true)}
              className="w-[90px] h-[70px] flex items-center justify-center rounded-lg border-2 border-gray-300 text-sm font-semibold bg-gray-100"
            >
              +{remainingCount}
            </button>
          )}
        </div>
      </div>
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
