"use client";

import { useState } from "react";
import { Check, Star, X } from "lucide-react";

export default function PricingCard({
  title,
  price,
  desc,
  features,
  background,
  buttonClass,
  isPopular,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    plan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = { ...formData, plan: title };
    try {
      const res = await fetch("/api/plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });
      const data = await res.json();

      if (res.status === 201) {
        setIsSubmitted(true);
      }
    } catch (err) {
      alert("Something went wrong try again later.");
    }
  };

  return (
    <>
      {/* CARD UI */}
      <div
        className={`relative rounded-[32px] border p-8 flex flex-col shrink-0 w-[85%] md:w-full snap-center transition-all duration-300 md:hover:translate-y-[-8px] shadow-sm hover:shadow-2xl ${background} bg-white`}
      >
        {isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest z-10">
            Most Popular
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-2xl font-serif text-slate-900">{title}</h3>
          <p className="text-xs text-slate-500 mt-1 font-sans">{desc}</p>
        </div>

        <div className="mb-8 text-left">
          <span className="text-4xl font-bold text-slate-900">{price}</span>
        </div>

        <ul className="space-y-4 mb-10 flex-grow text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 bg-emerald-100 rounded-full p-0.5 shrink-0">
                <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
              </div>
              <span className="text-sm text-slate-600 font-sans flex items-center gap-1">
                {feature}
                {feature.toLowerCase().includes("verified") && (
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                )}
              </span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsModalOpen(true)}
          className={`w-full py-4 rounded-2xl text-white font-sans font-semibold tracking-wide transition-colors ${buttonClass}`}
        >
          Select {title}
        </button>
      </div>

      {/* LEAD CAPTURE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-[32px] p-8 relative shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-serif text-slate-900 mb-2">
                  Get Started with {title}
                </h3>
                <p className="text-sm text-slate-500 mb-6 font-sans">
                  Enter your details and we'll set up your listing.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1 ml-1">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={formData.name}
                      placeholder="Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-slate-100 focus:outline-none focus:border-emerald-500 bg-slate-50 font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1 ml-1">
                      WhatsApp Number
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-slate-100 focus:outline-none focus:border-emerald-500 bg-slate-50 font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1 ml-1">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@realty.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-100 focus:outline-none focus:border-emerald-500 bg-slate-50 font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold mt-4 hover:bg-emerald-700 transition-colors"
                  >
                    Confirm Selection
                  </button>
                </form>
              </>
            ) : (
              <div className="py-10 text-center animate-in fade-in slide-in-from-bottom-4">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-emerald-600" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-serif text-slate-900 mb-2">
                  Requirement Received!
                </h3>
                <p className="text-slate-600 font-sans px-4">
                  Our team will reach out to you via{" "}
                  <span className="font-bold text-emerald-600">
                    WhatsApp within 2 hours
                  </span>{" "}
                  to collect property images and details.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
