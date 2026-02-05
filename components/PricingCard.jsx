import { UserStar } from "lucide-react";

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
            <span className="flex items-center gap-2">
              {/* dot */}
              <span className="inline-block h-[6px] w-[6px] bg-gray-400 rounded-full" />

              {/* feature text */}
              <span className="flex items-center gap-1">
                {feature}

                {title === "Active Agent" &&
                  feature.toLowerCase().includes("verified") && (
                    <UserStar className="w-4 h-4 text-teal-600" />
                  )}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <button className="mt-auto mb-5 w-full rounded-lg bg-black py-3 text-white cursor-pointer">
        Let's Begin
      </button>
    </div>
  );
}
