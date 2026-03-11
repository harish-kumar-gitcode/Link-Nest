"use client";

import { useState, useEffect } from "react";
import { Pencil } from "lucide-react";
import Link from "next/link";
import Loading from "../Loading";

export default function ViewProperty() {
  const [query, setQuery] = useState("");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔥 Fetch all properties on initial load
  useEffect(() => {
    fetchAllProperties();
  }, []);

  const fetchAllProperties = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/property");
      const data = await res.json();
      setProperties(data);
    } catch (err) {
      console.log("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/property?search=${encodeURIComponent(query.trim())}`
      );
      const data = await res.json();
      setProperties(data);
    } catch (err) {
      console.log("Search Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      {/* 🔎 Search Field */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="flex items-center mt-2 relative w-80"
      >
        <input
          type="text"
          placeholder="Enter property title or slug"
          className="focus:outline-none border border-slate-300 rounded-sm w-full text-sm py-1 pl-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-2 bottom-1 text-blue-500 cursor-pointer hover:scale-[1.05] transition-all duration-300"
        >
          Search
        </button>
      </form>

      {/* 🔄 Loading */}
      {loading && <Loading>Loading properties...</Loading>}

      {/* ❌ No Results */}
      {!loading && properties.length === 0 && (
        <p className="text-gray-500 mt-4">No properties found</p>
      )}

      {/* 🏠 Properties Grid */}
      <div className="flex flex-wrap mt-4 gap-4">
        {properties.map((property) => (
          <div
            key={property._id}
            className="border border-gray-300 w-110 min-h-64 px-4 py-3 rounded-lg flex flex-col shadow-md"
          >
            {/* 🖼 Images */}
            <div className="flex gap-2 mb-3 overflow-x-auto">
              {property?.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`property-${index}`}
                  className="w-24 h-20 object-cover rounded"
                />
              ))}
            </div>

            {/* 📄 Property Info */}
            <h1 className="text-lg font-semibold mb-1">{property.title}</h1>

            <p className="text-sm">Price: ₹{property.price}</p>

            {/* 👤 Agent Info (Safe Rendering) */}
            {property.agent?.name && (
              <p className="text-sm">Agent Name: {property.agent.name}</p>
            )}

            {property.agent?.number && (
              <p className="text-sm">
                Agent Contact: <b>{property.agent.number}</b>
              </p>
            )}

            {/* ✏ Edit Button */}
            <div className="relative flex items-center text-white mt-3">
              <Pencil className="absolute ml-3" size={15} />
              <Link
                className="bg-orange-500 px-8 py-1 rounded-lg text-sm cursor-pointer hover:bg-orange-600 transition-all"
                href={`/admin/property/edit/${property._id}`}
                target="_blank"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
