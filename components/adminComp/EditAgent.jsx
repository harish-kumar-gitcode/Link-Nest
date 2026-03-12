"use client";

import { useState, useEffect } from "react";
import Loading from "../Loading";

export default function EditAgent(id) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    number: "",
    whatsApp: "",
    status: "",
    plan: "",
  });
  const handleFetch = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/agent/${id.id}`);
      const data = await res.json();
      setFormData({
        name: data.matchedAgent.name,
        image: data.matchedAgent.image,
        number: data.matchedAgent.number,
        whatsApp: data.matchedAgent.whatsApp,
        status: data.matchedAgent.status,
        plan: data.matchedAgent.plan,
      });
    } catch (err) {
      return alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <>
      <div>
        {loading ? <Loading children={"Loading agent details..."} /> : ""}
        <h1>Name: {formData.name}</h1>
        <img
          src={formData.image}
          alt="Profile Picture"
          width={40}
          height={40}
        />
        <p>Phone: {formData.number}</p>
        <p>WhatsApp: {formData.whatsApp}</p>
        <p>status: {formData.status}</p>
        <p>Plan: {formData.plan}</p>
      </div>
    </>
  );
}
