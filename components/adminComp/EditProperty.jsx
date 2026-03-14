"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import UploadImages from "../UploadImage";
import PropertyMapClient from "../PropertyMapClient";
import Loading from "../Loading";

const EditProperty = ({ id }) => {
  const router = useRouter();

  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // 🔹 Fetch property
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`/api/property/${id}`);
        const data = await res.json();
        setFormData(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  // 🔹 Normal change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Location nested change
  const handleLocationChange = (e) => {
    const { name, value } = e.target;

    // Mapping "area-loc" from the input name to the "area" key in the location object
    const keyName = name === "area-loc" ? "area" : name;

    setFormData((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        [keyName]: value,
      },
    }));
  };

  // 🔹 Delete image
  const handleImageDelete = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  // 🔹 Add new uploaded images (Fixed Duplication)
  const handleNewImages = (newImages) => {
    setFormData((prev) => {
      // Create a unique list of images to prevent the "triple upload" bug
      const currentImages = prev.images || [];
      const combined = [...currentImages, ...newImages];

      // Filter out duplicates by URL string
      const uniqueImages = Array.from(new Set(combined));

      return {
        ...prev,
        images: uniqueImages,
      };
    });
  };

  // 🔹 Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch(`/api/property/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Update failed");

      alert("Property updated successfully");
      router.push("/admin/dashboard");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Loading>Loading property...</Loading>;
  if (!formData) return <p className="p-4">Property not found</p>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Edit Property</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* TITLE */}
        <label className="font-medium block">
          Title
          <input
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 mb-3 font-normal"
            placeholder="Title"
          />
        </label>

        <div className="flex flex-wrap gap-5 font-medium">
          {/* PRICE */}
          <label className="flex-1 min-w-[150px]">
            Price
            <input
              name="price"
              value={formData.price || ""}
              onChange={handleChange}
              className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal"
              placeholder="Price"
            />
          </label>

          {/* LENGTH */}
          <label className="flex-1 min-w-[100px]">
            Length
            <input
              name="length"
              value={formData.length || ""}
              onChange={handleChange}
              className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal"
              placeholder="Length"
            />
          </label>

          {/* BREADTH */}
          <label className="flex-1 min-w-[100px]">
            Breadth
            <input
              name="breadth"
              value={formData.breadth || ""}
              onChange={handleChange}
              className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal"
              placeholder="Breadth"
            />
          </label>

          {/* AREA */}
          <label className="flex-1 min-w-[100px]">
            Area
            <input
              name="area"
              value={formData.area || ""}
              onChange={handleChange}
              className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal"
              placeholder="Area"
            />
          </label>

          {/* FACING */}
          <label className="flex-1 min-w-[100px]">
            Facing
            <input
              name="facing"
              value={formData.facing || ""}
              onChange={handleChange}
              className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal"
              placeholder="Facing"
            />
          </label>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          {/* DESCRIPTION */}
          <label className="font-medium flex flex-col w-full md:w-1/2">
            Description
            <textarea
              name="desc" // Note: Changed to match your fetch data "desc"
              value={formData.desc || ""}
              onChange={handleChange}
              className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal h-60 resize-none scrollbar-hide"
              placeholder="Description"
            />
          </label>

          <div className="w-full md:w-1/2">
            <p className="font-medium mb-1">Map</p>
            <div className="h-44 w-full mb-2">
              <PropertyMapClient
                lat={formData.location?.lat}
                lng={formData.location?.lng}
              />
            </div>
            <div className="flex gap-5">
              <label className="flex-1">
                Latitude
                <input
                  name="lat"
                  value={formData.location?.lat || ""}
                  onChange={handleLocationChange}
                  className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal"
                  placeholder="Latitude"
                />
              </label>
              <label className="flex-1">
                Longitude
                <input
                  name="lng"
                  value={formData.location?.lng || ""}
                  onChange={handleLocationChange}
                  className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal"
                  placeholder="Longitude"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <label className="w-full">
            Address
            <input
              name="address"
              value={formData.location?.address || ""}
              onChange={handleLocationChange}
              className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal"
              placeholder="Address"
            />
          </label>
          <label className="w-full md:w-1/3">
            Location Area
            <input
              name="area-loc"
              value={formData.location?.area || ""}
              onChange={handleLocationChange}
              className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal"
              placeholder="Location Area"
            />
          </label>
        </div>

        {/* IMAGES SECTION */}
        <div className="border-t pt-4">
          <h2 className="font-semibold mb-3">Images</h2>
          <div className="flex flex-wrap gap-4 mb-6">
            {formData.images?.map((img, i) => (
              <div key={i} className="relative group h-28 w-40">
                <img
                  src={img}
                  alt={`property-${i}`}
                  className="h-full w-full object-cover rounded-md border"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-md flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => handleImageDelete(i)}
                    className="bg-red-500 p-2 rounded-full hover:bg-red-600"
                  >
                    <Trash2 size={18} className="text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <h1>New Images</h1>
          <UploadImages onUploadComplete={handleNewImages} />
        </div>

        {/* AGENT (READ ONLY) */}
        <div className="border-t pt-4">
          <h2 className="font-semibold mb-2">Agent Details</h2>
          <input
            value={formData.agent?.name || ""}
            disabled
            className="w-full border rounded px-3 py-2 mb-2 bg-gray-100"
          />
          <input
            value={formData.agent?.number || ""}
            disabled
            className="w-full border rounded px-3 py-2 bg-gray-100"
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className={`px-5 py-2 rounded text-white mt-4 ${
            saving
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {saving ? "Updating..." : "Update Property"}
        </button>
      </form>
    </div>
  );
};

export default EditProperty;
