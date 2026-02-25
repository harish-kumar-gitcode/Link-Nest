"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import UploadImages from "../UploadImage";
import PropertyMapClient from "../PropertyMapClient";

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

  const handleLocationChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        [name]: value, // 🔥 keep as string
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

  // 🔹 Add new uploaded images
  const handleNewImages = (uploadedImages) => {
    setFormData((prev) => ({
      ...prev,
      images: uploadedImages,
    }));
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

  if (loading) return <p className="p-4">Loading property...</p>;
  if (!formData) return <p className="p-4">Property not found</p>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Edit Property</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* TITLE */}
        <label className="font-medium">
          Title
          <input
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 mb-3"
            placeholder="Title"
          />
        </label>

        <div className="flex gap-5 font-medium">
          {/* PRICE */}
          <label>
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
          <label>
            Length
            <input
              name="length"
              value={formData.length || ""}
              onChange={handleChange}
              className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal"
              placeholder="Price"
            />
          </label>
          {/* BREADTH */}
          <label>
            Breadth
            <input
              name="breadth"
              value={formData.breadth || ""}
              onChange={handleChange}
              className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal"
              placeholder="Price"
            />
          </label>
          {/* AREA */}
          <label>
            Area
            <input
              name="area"
              value={formData.area || ""}
              onChange={handleChange}
              className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal"
              placeholder="Price"
            />
          </label>
          {/* FACING */}
          <label>
            Facing
            <input
              name="facing"
              value={formData.facing || ""}
              onChange={handleChange}
              className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal"
              placeholder="Price"
            />
          </label>
        </div>

        <div className="flex gap-5">
          {/* DESCRIPTION */}
          <label className="font-medium flex flex-col w-1/2">
            Description
            <textarea
              name="description"
              value={formData.desc || ""}
              onChange={handleChange}
              className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal h-74 resize-none scrollbar-hide"
              placeholder="Description"
            />
          </label>
          <div className="w-1/2 h-60">
            <p className="font-medium">Map</p>
            <PropertyMapClient
              lat={formData.location.lat}
              lng={formData.location.lng}
            />
            <div className="flex gap-5">
              {/* LATITUDE */}
              <label>
                Latitude
                <input
                  name="lat"
                  value={formData.location.lat || ""}
                  onChange={handleLocationChange}
                  className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal"
                  placeholder="Latitude"
                />
              </label>
              {/* LONGITUDE */}
              <label>
                Longitude
                <input
                  name="lng"
                  value={formData.location.lng || ""}
                  onChange={handleLocationChange}
                  className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal"
                  placeholder="Longitude"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-start w-full gap-5">
          {/* ADDRESS */}
          <label className="w-full">
            Address
            <input
              name="address"
              value={formData.location.address || ""}
              onChange={handleChange}
              className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal"
              placeholder="Price"
            />
          </label>
          {/* AREA */}
          <label>
            Area
            <input
              name="area-loc"
              value={formData.location.area || ""}
              onChange={handleChange}
              className="w-full border rounded px-3 py-1 border-gray-400 outline-none focus:border-blue-400 font-normal"
              placeholder="Price"
            />
          </label>
        </div>

        {/* IMAGES SECTION */}
        <div className="border-t pt-4">
          <h2 className="font-semibold mb-3">Images</h2>

          {/* Existing + Uploaded Images */}
          <div className="flex flex-wrap gap-4 mb-6">
            {formData.images?.map((img, i) => (
              <div key={i} className="relative group h-28 w-40">
                <img
                  src={img}
                  alt={`property-${i}`}
                  className="h-full w-full object-cover rounded-md border"
                />

                <div
                  className="absolute inset-0 bg-black/40 opacity-0 
                             group-hover:opacity-100 
                             transition-opacity duration-200 
                             rounded-md flex items-center justify-center"
                >
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

          {/* Upload New Images */}
          <UploadImages
            onUploadComplete={(newImages) =>
              setFormData((prev) => ({
                ...prev,
                images: [...prev.images, ...newImages],
              }))
            }
          />
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

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={saving}
          className={`px-5 py-2 rounded text-white ${
            saving ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {saving ? "Updating..." : "Update Property"}
        </button>
      </form>
    </div>
  );
};

export default EditProperty;
