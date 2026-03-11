"use client";
import { Trash2, Pencil } from "lucide-react";

export default function ViewAgentListing({ listing }) {
  return (
    <>
      {/* Outer container */}
      <div>
        {/* HEAD */}
        <div className="grid grid-cols-[5fr_1fr_1fr_1fr] pl-5 py-2 font-medium text-lg">
          <span>Property title</span>
          <span className="text-center">Location</span>
          <span className="text-center">Status</span>
          <span className="text-center">Actions</span>
        </div>
        {/* ROWS */}
        {listing.map((l, index) => (
          <button
            key={index}
            className="w-full text-left hover:shadow-md hover:bg-gray-50 transition-all duration-300 rounded-lg"
          >
            <div className="grid grid-cols-[5fr_1fr_1fr_1fr] pl-5 py-2 items-center rounded-lg mt-1">
              <span className="text-xl font-medium">{l.title}</span>
              <span className="text-center text-lg">{l.location.area}</span>
              <span
                className={`px-6 py-1 rounded-full text-sm w-fit place-self-center text-center ${
                  l.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : l.status === "Suspended"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {l.status}
              </span>
              <span>
                <div className="flex justify-center gap-3">
                  <button className="px-1 py-1 bg-amber-500 rounded-sm cursor-pointer hover:bg-orange-300 text-white transition-all duration-200 z-10">
                    <Pencil className="h-4" />
                  </button>
                  <button className="px-1 py-1 bg-red-600 rounded-sm cursor-pointer hover:bg-red-400 text-white transition-all duration-200 z-10">
                    <Trash2 className="h-5" />
                  </button>
                </div>
              </span>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
