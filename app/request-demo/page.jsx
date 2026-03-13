"use client";

import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { useState } from "react";
import SavedCard from "@/components/SavedCard";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  //   Function to set form data.
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to handle click.
  const handleClick = (e) => {
    // Check if the input is empty.
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.date === "" ||
      formData.time === "" ||
      formData.type === "" ||
      formData.type === "default"
    )
      return alert("All fields are required");
    e.preventDefault();
    // Function to handle the API request.
    const handleSubmit = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/support/demo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          setSaved(true);
        }
      } catch (err) {
        alert("Something went wrong try later.");
      } finally {
        setLoading(false);
      }
    };
    handleSubmit();
  };

  // -----MAIN-----
  return (
    <>
      {/* HEADER */}
      <div>
        <PageHeader />
      </div>

      {saved ? (
        <SavedCard />
      ) : (
        <>
          {/* REQUEST FORM */}
          <div className="grid md:grid-cols-3 mt-3">
            <div className="flex flex-col justify-center rounded-md border-gray-200 shadow-lg items-center col-start-2 mx-12 h-130 justify-items-center border px-6">
              <h1 className="text-4xl font-medium text-center">
                Request a Demo
              </h1>

              <form className="mt-3 w-62">
                {/* NAME */}
                <div className="relative pt-2 w-full">
                  <input
                    required
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                    className="peer w-full outline-none border border-gray-200 rounded-sm text-sm pl-2 py-2 focus:ring-1 focus:ring-blue-400"
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
                    Name
                  </label>
                </div>
                {/* EMAIL */}
                <div className="relative pt-2 w-full mt-1">
                  <input
                    required
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                    className="peer w-full outline-none border border-gray-200 rounded-sm text-sm pl-2 py-2 focus:ring-1 focus:ring-blue-400"
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
                    Email
                  </label>
                </div>
                {/* PHONE NUMBER */}
                <div className="relative pt-2 w-full mt-1">
                  <input
                    required
                    name="phone"
                    type="text"
                    autoComplete="off"
                    value={formData.phone}
                    onChange={handleChange}
                    className="peer w-full outline-none border border-gray-200 rounded-sm text-sm pl-2 py-2 focus:ring-1 focus:ring-blue-400"
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
                    Phone
                  </label>
                </div>
                {/* DATE */}
                <div className="relative pt-2 w-full mt-1.5">
                  <input
                    required
                    name="date"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    autoComplete="off"
                    value={formData.date}
                    onChange={handleChange}
                    className="peer w-full outline-none border border-gray-200 rounded-sm text-sm pl-2 py-2 focus:ring-1 focus:ring-blue-400"
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
                    Select preferred date
                  </label>
                </div>
                {/* TIME */}
                <div className="relative pt-2 w-full mt-1.5">
                  <input
                    required
                    name="time"
                    type="time"
                    min={new Date().toISOString().split("T")[0]}
                    autoComplete="off"
                    value={formData.time}
                    onChange={handleChange}
                    className="peer w-full outline-none border border-gray-200 rounded-sm text-sm pl-2 py-2 focus:ring-1 focus:ring-blue-400"
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
                    Select preferred time
                  </label>
                </div>
                {/* TYPE */}
                <div className="relative pt-2 w-full mt-1.5">
                  <select
                    name="type"
                    id="info"
                    value={formData.type}
                    onChange={handleChange}
                    className="peer w-full outline-none border border-gray-200 rounded-sm text-sm pl-2 py-2 focus:ring-1 focus:ring-blue-400"
                  >
                    <option value="default">Select</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Friends">Friends/Family</option>
                  </select>
                  <label
                    className="absolute -top-1 left-3 bg-white px-1 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-2.5
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400
                    peer-focus:-top-1
                    peer-focus:text-sm
                    peer-focus:text-blue-500"
                  >
                    How did you get to know about us?
                  </label>
                </div>
                <div className="flex justify-center">
                  <button
                    disabled={loading}
                    className={`px-6 py-2 mt-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 ${
                      loading ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    onClick={handleClick}
                  >
                    {loading ? "Please wait" : "Book Demo"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
}
