import PricingCard from "./PricingCard";

const plans = [
  {
    title: "Starter",
    price: "₹799",
    desc: "Perfect for testing a single high-end listing.",
    features: [
      "1 Premium Landing page",
      "WhatsApp Smart-Link",
      "24h Delivery",
      "Mobile Optimized",
    ],
    background: "border-slate-100",
    buttonClass: "bg-slate-900 hover:bg-black",
    isPopular: false,
  },
  {
    title: "Professional",
    price: "₹1999",
    desc: "The sweet spot for active consultants.",
    features: [
      "3 Landing pages (~₹666 each)",
      "Custom QR codes",
      "2 Story templates",
      "Priority Support",
    ],
    background: "border-emerald-500 shadow-emerald-100",
    buttonClass: "bg-emerald-600 hover:bg-emerald-700",
    isPopular: true,
  },
  {
    title: "Unlimited",
    price: "₹5999/mo",
    desc: "Scalable digital presence for your agency.",
    features: [
      "Unlimited listings",
      "Monthly traffic reports",
      "Verified Partner badge",
      "Custom Branding",
    ],
    background: "border-slate-100",
    buttonClass: "bg-slate-900 hover:bg-black",
    isPopular: false,
  },
];

const Pricing = () => {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4 tracking-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="text-slate-500 font-sans max-w-lg mx-auto">
          Elevate your listings today. Join Bengaluru's elite consultants.
        </p>
      </div>

      {/* MOBILE SWIPEABLE CARDS + DESKTOP GRID */}
      <div
        className="flex md:grid md:grid-cols-3 gap-8 px-6 pb-10 
                   overflow-x-auto snap-x snap-mandatory scrollbar-hide 
                   md:overflow-visible md:snap-none md:justify-center md:mx-60"
      >
        {plans.map((plan) => (
          <PricingCard key={plan.title} {...plan} />
        ))}
      </div>

      <div className="flex justify-center mt-4 text-slate-400 text-xs font-sans italic">
        <p>No lock-in periods. 100% ownership of your links. Cancel anytime.</p>
      </div>
    </div>
  );
};

export default Pricing;
