import PricingCard from "./PricingCard";

//Passing the props here.
const plans = [
  {
    title: "Basic",
    price: "₹499",
    features: ["1 Project", "Email Support"],
    background:
      "text-gray-800 hover:scale-[1.05] transition-all transition-ease_out duration-300 [&>button]:hover:bg-gray-900",
  },
  {
    title: "Pro",
    price: "₹999",
    features: ["5 Projects", "Priority Support"],
    background:
      "[&>h3]:text-blue-700 [&>p]:text-blue-700 hover:scale-[1.05] transition-all transition-ease_out duration-300 [&>button]:bg-blue-600 [&>button]:hover:bg-blue-700",
  },
  {
    title: "Active Agent",
    price: "₹1999",
    features: ["Unlimited Projects", "Dedicated Support"],
    background:
      "[&>h3]:text-teal-700 [&>p]:text-teal-700 hover:scale-[1.05] transition-all transition-ease_out duration-300 [&>button]:bg-teal-600 [&>button]:hover:bg-teal-700",
  },
];

const Pricing = () => {
  return (
    <div className="mb-3">
      <h1 className="font-semibold text-6xl my-10 ml-20">Pricing</h1>
      <div className="flex justify-evenly h-[400px] w-[100%]">
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
