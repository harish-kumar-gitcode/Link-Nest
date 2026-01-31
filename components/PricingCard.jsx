export default function PricingCard({ title, price, features, background }) {
  return (
    <div
      className={`rounded-xl border border-gray-200 p-6 shadow-xl shadow-black/40 w-[21%] flex flex-col h-auto ${background}`}
    >
      <h3 className="text-4xl font-semibold">{title}</h3>

      <p className="mt-2 text-3xl font-bold">{price}</p>

      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600">
            {feature}
          </li>
        ))}
      </ul>

      <button className="mt-auto mb-5 w-full rounded-lg bg-black py-3 text-white cursor-pointer">
        Let's Begin
      </button>
    </div>
  );
}
