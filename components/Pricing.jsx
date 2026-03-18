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
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500 font-sans max-w-lg mx-auto">
            Elevate your listings today. No hidden commissions, just pure
            professionalism.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>

        <div className="flex justify-center mt-12 text-slate-400 text-sm font-sans italic">
          <p>
            No lock-in periods. 100% ownership of your links. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
