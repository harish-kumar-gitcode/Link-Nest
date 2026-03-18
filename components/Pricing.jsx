import PricingCard from "./PricingCard";

//Passing the props here.
const plans = [
  {
    title: "Starter",
    price: "₹799",
    features: ["1 Premium Landing page", "WhatsApp Smart-Link", "24h Delivery"],
    background:
      "text-gray-800 hover:scale-[1.05] transition-all transition-ease_out duration-300 [&>button]:hover:bg-gray-900",
  },
  {
    title: "Professional",
    price: "₹1999",
    features: [
      "3 Landing pages (~₹666 each)",
      "Custom QR codes",
      "2 story template",
    ],
    background:
      "[&>h3]:text-blue-700 [&>p]:text-blue-700 hover:scale-[1.05] transition-all transition-ease_out duration-300 [&>button]:bg-blue-600 [&>button]:hover:bg-blue-700",
  },
  {
    title: "Unlimited",
    price: "₹5999/mo",
    features: [
      "Unlimited listings",
      "Monthly traffic reports",
      "Priority Support",
      "Verified badge",
    ],
    background:
      "[&>h3]:text-teal-700 [&>p]:text-teal-700 hover:scale-[1.05] transition-all transition-ease_out duration-300 [&>button]:bg-teal-600 [&>button]:hover:bg-teal-700",
  },
];

const Pricing = () => {
  return (
    <div className="mb-3">
      <h1 className="text-4xl text-center font-semibold md:text-6xl md:my-10">
        Pricing
      </h1>
      <div className="flex overflow-x-auto md:overflow-x-none justify-center mt-5 gap-5 mx-4 md:mx-0 md:gap-0 md:justify-evenly md:h-[450px] md:w-[100%]">
        {plans.map((plan) => (
          <PricingCard
            key={plan.title}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            background={plan.background}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10 text-gray-500">
        <p>No lock-in. No commissions. Cancel anytime.</p>
      </div>
    </div>
  );
};

export default Pricing;
