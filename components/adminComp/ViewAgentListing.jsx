"use client";

export default function ViewAgentListing({ listing }) {
  console.log(listing);
  return (
    <>
      {/* Outer container */}
      <div>
        {/* HEAD */}
        <div className="grid grid-cols-[5fr_1fr_1fr_1fr] px-2 py-2 rounded-t-md bg-gray-50 font-medium text-lg">
          <span className="">Property title</span>
          <span className="text-center">Location</span>
          <span className="text-center">Status</span>
          <span className="text-center">Actions</span>
        </div>
        {/* ROWS */}
        {listing.map((l, index) => (
          <button key={index} className="w-full text-left">
            <div className="grid grid-cols-[5fr_1fr_1fr_1fr]">
              <span>{l.title}</span>
              <span className="text-center">{l.location.area}</span>
              <span
                className={`px-6 py-1 rounded-full text-sm w-fit place-self-center text-center ${
                  l.status === "active"
                    ? "bg-green-100 text-green-700"
                    : l.status === "suspended"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {l.status}
              </span>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
