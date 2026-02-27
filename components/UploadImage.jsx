"use client";

import axios from "axios";
import { useRef, useState } from "react";
import { Trash2 } from "lucide-react";

export default function UploadImages({ onUploadComplete }) {
  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleUpload = async (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);

    for (let file of files) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = async () => {
        try {
          const res = await axios.post(
            "/api/upload",
            { file: reader.result },
            {
              onUploadProgress: (progressEvent) => {
                const percent = Math.round(
                  (progressEvent.loaded * 100) / progressEvent.total
                );
                setProgress(percent);
              },
            }
          );

          // Use functional update to avoid stale state issue
          setImages((prev) => {
            const updated = [...prev, res.data.url];
            onUploadComplete(updated); // send updated list to parent
            return updated;
          });
        } catch (err) {
          console.error("Upload error:", err);
        }
      };
    }
  };

  const handleDelete = async (index) => {
    const imageToDelete = images[index]; // store BEFORE state update

    try {
      const res = await fetch("/api/upload/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: imageToDelete,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data);
        return alert("Delete failed");
      }

      // Now update UI AFTER successful delete
      setImages((prev) => {
        const updated = prev.filter((_, i) => i !== index);
        onUploadComplete(updated);
        return updated;
      });
    } catch (err) {
      console.log(err);
      alert("An error occurred");
    }
  };

  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex items-center justify-end pl-3 flex-col gap-4">
      {/* Upload Box */}
      <div className="flex flex-col items-center">
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={handleUpload}
          className="hidden"
        />

        <div
          onClick={openFilePicker}
          className="w-30 h-30 border-2 border-dashed border-gray-400 
                     rounded-lg flex flex-col items-center justify-center 
                     cursor-pointer hover:border-blue-500 transition p-2 text-center"
        >
          {selectedFiles.length === 0 ? (
            <span className="text-4xl text-gray-400">+</span>
          ) : (
            <div className="text-sm text-gray-700">
              <p className="font-medium truncate max-w-[120px]">
                {selectedFiles[0].name}
              </p>
              {selectedFiles.length > 1 && (
                <p className="text-xs text-gray-500">
                  +{selectedFiles.length - 1} more
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Image Preview Grid */}
      <div className="w-full flex flex-wrap gap-4 justify-start pt-5">
        {images.map((img, i) => (
          <div key={i} className="relative group h-25 w-37">
            {/* Image */}
            <img
              src={img}
              alt={`uploaded-${i}`}
              className="h-full w-full border border-gray-300 rounded-md shadow-sm object-cover"
            />

            {/* Hover Overlay */}
            <div
              className="absolute inset-0 bg-black/40 opacity-0 
                         group-hover:opacity-100 
                         transition-opacity duration-200 
                         rounded-md flex items-center justify-center"
            >
              <button
                type="button"
                onClick={() => handleDelete(i)}
                className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition transform hover:scale-105"
              >
                <Trash2 size={18} className="text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Optional Progress Indicator */}
      {progress > 0 && progress < 100 && (
        <div className="w-full bg-gray-200 rounded h-2 mt-2">
          <div
            className="bg-blue-500 h-2 rounded transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}
