"use client";
import { useState, useRef } from "react";
import UploadImages from "../UploadImage";

const AddProperty = () => {
  const formRef = useRef(null);
  const [createdListing, setCreatedListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  console.log(images);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    length: "",
    breadth: "",
    area: "",
    facing: "",
    description: "",
    location: {
      address: "",
      area: "",
      lat: "",
      lng: "",
    },
  });
  const [agentId, setAgentId] = useState("");
  const [agentName, setAgentName] = useState("");
  const [agentNumber, setAgentNumber] = useState("");

  // Adding a logic to seperate commas.
  const formatIndianNumber = (value) => {
    if (!value) return "";

    const number = value.replace(/,/g, "");
    return new Intl.NumberFormat("en-IN").format(number);
  };

  //Handling the form data collection.
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //Handling the location collection.
  const handleLocationChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        [name]: value,
      },
    }));
  };

  // Adding the function to fetch the agent details
  const handleFind = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/agent/find", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: agentNumber }),
      });
      const data = await res.json();

      if (!data._id && !data.name) {
        setAgentId("");
        setAgentName("");
        alert("No agent found.");
        return;
      }
      setAgentId(data._id);
      setAgentName(data.name);
    } catch (err) {
      console.error("An error occured.");
    } finally {
      setLoading(false);
    }
  };

  // Handling the submit.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (images.length === 0) {
      alert("Add atleast one image.");
      return;
    }
    try {
      const res = await fetch("/api/listing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          images,
          agentId,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        setCreatedListing(data);
        setFormData({
          title: "",
          price: "",
          length: "",
          breadth: "",
          area: "",
          facing: "",
          description: "",
          type: "",
          location: {
            address: "",
            area: "",
            lat: "",
            lng: "",
          },
        });
        setImages([]);
        setAgentId("");
        setAgentName("");
        setAgentNumber("");
      }
    } catch (err) {
      alert("Listing not saved.");
      console.error("Error saving:", err);
    }
  };

  return (
    <div className="relative">
      {createdListing && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-white/70 backdrop-blur-xs">
          <div className="flex flex flex-col items-center justify-center border w-150 h-60 rounded-md border-gray-200 shadow-md bg-white ">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center animate-bounce">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <p className="mt-3 text-lg font-semibold text-black">
              Listing Created Successfully
            </p>

            <div className="flex gap-5">
              <a
                href={`/property/${createdListing.newListing.slug}`}
                className="py-2 px-3 border mt-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                target="_blank"
              >
                View Property
              </a>
              <button
                className="py-2 px-3 border mt-2 rounded-md bg-green-600 text-white hover:bg-green-700 cursor-pointer"
                onClick={() => setCreatedListing(null)}
              >
                Add Property
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="h-130 flex-col flex overflow-hidden scroll-smooth">
        <div className="p-4">
          <h1 className="text-3xl text-center">Create new listing</h1>
        </div>
        <div className="flex flex-1 min-h-0">
          <div className="w-1/2 flex flex-col flex-1 min-h-0">
            <div className="flex-1 overflow-y-auto scrollbar-hide px-1">
              <form ref={formRef} onSubmit={handleSubmit}>
                {/* Container for the Listing details. */}
                <div className="mt-5 border-t w-full border-gray-300">
                  {/* Title, Price, Length, Breadth, Area, Facing & Description */}
                  <p className="text-md font-medium mt-2">Listing details</p>
                  {/* ---TITLE--- */}
                  <div className="flex w-full items-center gap-10 mt-1">
                    <div className="w-84 relative pt-2">
                      <input
                        required
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        type="text"
                        placeholder=" "
                        className="peer w-full outline-none border border-gray-200 rounded-sm text-sm pl-2 py-1 focus:ring-1 focus:ring-blue-400"
                      />
                      <label
                        className="absolute -top-1 left-3 bg-white px-1 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-2.5
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400
                    peer-focus:-top-1
                    peer-focus:text-sm
                    peer-focus:text-blue-500"
                      >
                        Title
                      </label>
                    </div>
                    {/* ---Price--- */}
                    <div className="relative w-60 pt-2">
                      <input
                        required
                        name="price"
                        inputMode="numeric"
                        value={formatIndianNumber(formData.price)}
                        onChange={(e) => {
                          const rawValue = e.target.value.replace(/,/g, "");
                          if (!isNaN(rawValue)) {
                            setFormData((prev) => ({
                              ...prev,
                              price: rawValue,
                            }));
                          }
                        }}
                        type="text"
                        placeholder=" "
                        className="peer w-full outline-none border border-gray-200 rounded-sm text-sm pl-2 py-1 focus:ring-1 focus:ring-blue-400"
                      />
                      <label
                        className="absolute -top-1 left-3 bg-white px-1 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-2.5
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400
                    peer-focus:-top-1
                    peer-focus:text-sm
                    peer-focus:text-blue-500"
                      >
                        Price (₹)
                      </label>
                    </div>
                  </div>
                  {/* Contianer for Length, Breadth and Area */}
                  <div className="w-full flex mt-2 items-center justify-between">
                    {/* Length */}
                    <div className="relative pt-2">
                      <input
                        required
                        name="length"
                        value={formData.length}
                        onChange={handleChange}
                        type="text"
                        className="peer w-36 outline-none border border-gray-200 rounded-sm text-sm pl-2 py-1 focus:ring-1 focus:ring-blue-400"
                        placeholder=" "
                      />
                      <label
                        className="absolute -top-1 left-3 bg-white px-1 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-2.5
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400
                    peer-focus:-top-1
                    peer-focus:text-sm
                    peer-focus:text-blue-500"
                      >
                        Length (ft)
                      </label>
                    </div>
                    {/* Breadth */}
                    <div className="relative pt-2">
                      <input
                        required
                        name="breadth"
                        value={formData.breadth}
                        onChange={handleChange}
                        type="text"
                        className="peer w-36 outline-none border border-gray-200 rounded-sm text-sm pl-2 py-1 focus:ring-1 focus:ring-blue-400"
                        placeholder=" "
                      />
                      <label
                        className="absolute -top-1 left-3 bg-white px-1 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-2.5
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400
                    peer-focus:-top-1
                    peer-focus:text-sm
                    peer-focus:text-blue-500"
                      >
                        Breadth (ft)
                      </label>
                    </div>
                    {/* Area */}
                    <div className="relative pt-2">
                      <input
                        required
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        type="text"
                        className="peer w-36 outline-none border border-gray-200 rounded-sm text-sm pl-2 py-1 focus:ring-1 focus:ring-blue-400"
                        placeholder=" "
                      />
                      <label
                        className="absolute -top-1 left-3 bg-white px-1 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-2.5
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400
                    peer-focus:-top-1
                    peer-focus:text-sm
                    peer-focus:text-blue-500"
                      >
                        Area (sq.ft)
                      </label>
                    </div>
                    {/* Facing */}
                    <div className="relative pt-2">
                      <input
                        required
                        name="facing"
                        value={formData.facing}
                        onChange={handleChange}
                        type="text"
                        className="peer w-36 outline-none border border-gray-200 rounded-sm text-sm pl-2 py-1 focus:ring-1 focus:ring-blue-400"
                        placeholder=" "
                      />
                      <label
                        className="absolute -top-1 left-3 bg-white px-1 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-2.5
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400
                    peer-focus:-top-1
                    peer-focus:text-sm
                    peer-focus:text-blue-500"
                      >
                        Facing
                      </label>
                    </div>
                  </div>
                  {/* DESCRIPTION */}
                  <div className="w-full mt-2">
                    <div className="relative pt-2">
                      <textarea
                        required
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        type="text"
                        className="peer w-full h-40 overflow-y-auto scrollbar-hide outline-none border border-gray-200 rounded-sm text-sm pl-2 py-1 focus:ring-1 focus:ring-blue-400 resize-none"
                        placeholder=" "
                      />
                      <label
                        className="absolute -top-1 left-3 bg-white px-1 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-2.5
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400
                    peer-focus:-top-1
                    peer-focus:text-sm
                    peer-focus:text-blue-500"
                      >
                        Description
                      </label>
                    </div>
                  </div>
                </div>
                {/* Container for Location details  */}
                <div className="mt-5 border-t w-full border-gray-300">
                  <p className="text-md font-medium mt-1">Location info</p>

                  <div className="flex w-full items-center gap-10 mt-2">
                    {/* Address */}
                    <div className="relative pt-2 w-full">
                      <input
                        required
                        name="address"
                        value={formData.location.address}
                        onChange={handleLocationChange}
                        type="text"
                        className="peer w-full outline-none border border-gray-200 rounded-sm text-sm pl-2 py-1 focus:ring-1 focus:ring-blue-400"
                        placeholder=" "
                      />
                      <label
                        className="absolute -top-1 left-3 bg-white px-1 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-2.5
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400
                    peer-focus:-top-1
                    peer-focus:text-sm
                    peer-focus:text-blue-500"
                      >
                        Address
                      </label>
                    </div>
                    {/* Area */}
                    <div className="relative pt-2">
                      <input
                        required
                        name="area"
                        value={formData.location.area}
                        onChange={handleLocationChange}
                        type="text"
                        className="peer w-60 outline-none border border-gray-200 rounded-sm text-sm pl-2 py-1 focus:ring-1 focus:ring-blue-400"
                        placeholder=" "
                      />
                      <label
                        className="absolute -top-1 left-3 bg-white px-1 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-2.5
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400
                    peer-focus:-top-1
                    peer-focus:text-sm
                    peer-focus:text-blue-500"
                      >
                        Area
                      </label>
                    </div>
                  </div>

                  {/* Container for the second line of location */}
                  <div className="flex items-center gap-10 mt-2">
                    {/* Latitude */}
                    <div className="relative pt-2 w-full">
                      <input
                        required
                        name="lat"
                        value={formData.location.lat}
                        onChange={handleLocationChange}
                        type="text"
                        className="peer w-full outline-none border border-gray-200 rounded-sm text-sm pl-2 py-1 focus:ring-1 focus:ring-blue-400"
                        placeholder=" "
                      />
                      <label
                        className="absolute -top-1 left-3 bg-white px-1 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-2.5
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400
                    peer-focus:-top-1
                    peer-focus:text-sm
                    peer-focus:text-blue-500"
                      >
                        Latitude
                      </label>
                    </div>
                    {/* Longitude */}
                    <div className="relative pt-2 w-full">
                      <input
                        required
                        name="lng"
                        value={formData.location.lng}
                        onChange={handleLocationChange}
                        type="text"
                        className="peer outline-none w-full border border-gray-200 rounded-sm text-sm pl-2 py-1 focus:ring-1 focus:ring-blue-400"
                        placeholder=" "
                      />
                      <label
                        className="absolute -top-1 left-3 bg-white px-1 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-2.5
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400
                    peer-focus:-top-1
                    peer-focus:text-sm
                    peer-focus:text-blue-500"
                      >
                        Longitude
                      </label>
                    </div>
                  </div>
                </div>
                {/* Contianer for agent and status */}
                <div className="w-full mt-5 border-t-1 border-gray-300 ">
                  <p className="font-semibold mt-1">Agent Details</p>
                  <div className="flex items-center gap-1">
                    <div className="relative pt-2 w-1/2 mt-2 mb-3">
                      <input
                        onChange={(e) => setAgentNumber(e.target.value)}
                        value={agentNumber}
                        type="text"
                        className="peer outline-none w-full border border-gray-200 rounded-sm text-sm pl-2 py-1 focus:ring-1 focus:ring-blue-400"
                        placeholder=" "
                      />
                      <label
                        className="absolute -top-1 left-3 bg-white px-1 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-2.5
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400
                    peer-focus:-top-1
                    peer-focus:text-sm
                    peer-focus:text-blue-500"
                      >
                        Phone Number
                      </label>
                    </div>
                    <button
                      type="button"
                      className="h-7 px-4 bg-blue-500 text-white text-sm rounded cursor-pointer hover:bg-blue-600"
                      onClick={handleFind}
                    >
                      {loading ? "..." : "Find"}
                    </button>

                    {/* Type of Property*/}

                    <div className="relative pt-2 w-60">
                      <select
                        required
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-sm text-sm pl-2 py-1 focus:ring-1 focus:ring-blue-400 outline-none"
                      >
                        <option value="">Select Property Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Villa">Villa</option>
                        <option value="Plot">Plot</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                    </div>
                  </div>
                  <div className="-translate-y-2 text-sm text-gray-800">
                    <p>{agentName === null ? "" : `Agent: ${agentName}`}</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* RIGHT COL - For uploading the images */}
          <div className="w-1/2">
            <UploadImages onUploadComplete={setImages}></UploadImages>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-green-500 w-30 py-2 rounded-xl text-lg text-white hover:bg-green-600 cursor-pointer"
            onClick={() => formRef.current.requestSubmit()}
          >
            Add listing
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
