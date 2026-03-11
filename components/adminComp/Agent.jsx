"use client";
import { useEffect, useState } from "react";
import AgentProp from "./AgentProp";
import { Plus, X, Camera } from "lucide-react";
import Loading from "../Loading";

export default function Agent() {
  const [agents, setAgent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const findAgent = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/agent", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        setAgent(data);
      } catch (err) {
        console.log("Error fetching:", err);
      } finally {
        setLoading(false);
      }
    };

    findAgent();
  }, []);

  // ✅ NEW FUNCTIONS (Added)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedImage) return;

    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);

    reader.onloadend = async () => {
      try {
        setUploading(true);

        const res = await fetch("/api/upload/agent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            file: reader.result,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          alert("Upload failed");
          return;
        }

        setImageUrl(data.url);
        alert("Uploaded successfully.");
        setSelectedImage(null);
      } catch (err) {
        console.error(err);
      } finally {
        setUploading(false);
      }
    };
  };

  // Handle input change.
  // DECLARATION
  const [agentForm, setAgentForm] = useState({
    name: "",
    number: "",
    whatsApp: "",
    image: "",
    status: "",
    plan: "",
  });

  // FUNCIONALITY
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setAgentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handling the save.
  const handleSave = async () => {
    setAgentForm((prev) => ({
      ...prev,
      image: imageUrl,
    }));
    if (
      agentForm.name === "" ||
      agentForm.number === "" ||
      agentForm.whatsApp === "" ||
      agentForm.status === "" ||
      agentForm.plan === ""
    )
      return alert("All fields are required");

    // Saving the agent.
    try {
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(agentForm),
      });
      if (res.status === 403) {
        alert("Agent already exists");
      }
      if (res.status === 201) {
        alert("Agent saved successfully.");
        setAgentForm({
          name: "",
          number: "",
          whatsApp: "",
          image: "",
          status: "",
          plan: "",
        });
        setImageUrl(null);
        setPreview(null);
      }
    } catch (err) {
      console.log("An error occured", err);
      alert("Something went wrong.");
    }
  };

  if (loading) return <Loading>Laoding agents...</Loading>;

  return (
    <div>
      <h1 className="text-4xl font-medium">Agents</h1>

      <div className="my-3 fixed top-20 right-10">
        <button
          onClick={() => setShowAddForm((prev) => !prev)}
          className="hover:scale-[1.05] h-12 w-12  cursor-pointer transition-all duration-200 flex items-center justify-center"
        >
          {showAddForm ? (
            <X className="w-full h-full text-white bg-red-600 p-3 rounded-full" />
          ) : (
            <Plus className="w-full h-full text-white bg-green-600 p-3 rounded-full" />
          )}
        </button>
      </div>

      {showAddForm ? (
        <div className="flex justify-center">
          <div className="mt-8 max-w-xl bg-white p-6 rounded-lg shadow-md w-full">
            <h2 className="text-xl font-semibold mb-4">Add New Agent</h2>

            {/* ✅ PROFILE IMAGE SECTION (Added Only) */}
            <div className="flex flex-col items-center mb-6">
              <input
                type="file"
                accept="image/*"
                id="agentImage"
                className="hidden"
                onChange={handleImageChange}
              />

              <label
                htmlFor="agentImage"
                className="relative w-28 h-28 rounded-full overflow-hidden cursor-pointer group"
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                    Add Photo
                  </div>
                )}

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-200">
                  <Camera className="text-white w-6 h-6" />
                </div>
              </label>

              {selectedImage && (
                <button
                  type="button"
                  onClick={handleUpload}
                  className="mt-3 bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  {uploading ? "Uploading..." : "Upload Image"}
                </button>
              )}
            </div>
            {/* ✅ END PROFILE IMAGE SECTION */}

            <div className="flex flex-col gap-2">
              <div className="flex gap-2 w-full">
                <div className="relative pt-2 w-1/2">
                  <input
                    required
                    name="name"
                    value={agentForm.name}
                    onChange={handleInputChange}
                    type="text"
                    autoComplete="off"
                    className="peer w-full outline-none border border-gray-200 rounded-sm text-sm pl-2 py-2 focus:ring-1 focus:ring-blue-400"
                    placeholder=" "
                  />
                  <label
                    className="absolute -top-1 translate-y-1 left-3 bg-white px-1 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-2.5
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400
                    peer-focus:-top-1
                    peer-focus:text-sm
                    peer-focus:text-blue-500"
                  >
                    Name
                  </label>
                </div>

                <div className="relative pt-2 w-1/2">
                  <input
                    required
                    name="number"
                    value={agentForm.number}
                    onChange={handleInputChange}
                    type="text"
                    autoComplete="off"
                    className="peer w-full outline-none border border-gray-200 rounded-sm text-sm pl-2 py-2 focus:ring-1 focus:ring-blue-400"
                    placeholder=" "
                  />
                  <label
                    className="absolute -top-1 translate-y-1 left-3 bg-white px-1 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-2.5
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400
                    peer-focus:-top-1
                    peer-focus:text-sm
                    peer-focus:text-blue-500"
                  >
                    Phone
                  </label>
                </div>
              </div>

              <div className="relative pt-2 w-full">
                <input
                  required
                  name="whatsApp"
                  value={agentForm.whatsApp}
                  onChange={handleInputChange}
                  type="text"
                  autoComplete="off"
                  className="peer w-full outline-none border border-gray-200 rounded-sm text-sm pl-2 py-2 focus:ring-1 focus:ring-blue-400"
                  placeholder=" "
                />
                <label
                  className="absolute -top-1 translate-y-1 left-3 bg-white px-1 text-gray-500 text-sm transition-all 
                  peer-placeholder-shown:top-2.5
                  peer-placeholder-shown:text-base
                  peer-placeholder-shown:text-gray-400
                  peer-focus:-top-1
                  peer-focus:text-sm
                  peer-focus:text-blue-500"
                >
                  WhatsApp Link
                </label>
              </div>

              <div className="flex gap-2">
                <select
                  className="border border-gray-200 focus:border-blue-500 p-2 rounded-md mt-1 w-1/2 outline-none text-gray-500"
                  name="status"
                  onChange={handleInputChange}
                  value={agentForm.status}
                >
                  <option value="">Select Status</option>
                  <option value="active">Active</option>
                  <option value="suspended">Suspended</option>
                  <option value="deleted">Deleted</option>
                </select>

                <select
                  className="border border-gray-200 focus:border-blue-500 p-2 rounded-md mt-1 w-1/2 outline-none text-gray-500"
                  name="plan"
                  onChange={handleInputChange}
                  value={agentForm.plan}
                >
                  <option value="">Select Plan</option>
                  <option value="Basic">Basic</option>
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                </select>
              </div>
              <div className="flex justify-center mt-3">
                <button
                  className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition cursor-pointer"
                  onClick={handleSave}
                >
                  Save Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-4 mt-6">
          {agents.map((agent) => (
            <div
              key={agent._id}
              className="hover:-translate-y-1 transition-all duration-200"
            >
              <AgentProp
                name={agent.name}
                phone={agent.number}
                profile={agent.image}
                id={agent._id}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
