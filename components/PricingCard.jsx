import { Check, Star } from "lucide-react";

export default function PricingCard({
  title,
  price,
  desc,
  features,
  background,
  buttonClass,
  isPopular,
}) {
  return (
    <div
      className={`relative rounded-[32px] border p-8 flex flex-col transition-all duration-300 hover:translate-y-[-8px] 
      w-full md:w-[350px] shadow-sm hover:shadow-2xl ${background} bg-white`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-serif text-slate-900">{title}</h3>
      <p className="text-sm text-slate-500 mt-2 mb-6 font-sans">{desc}</p>

      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-4xl font-bold text-slate-900">{price}</span>
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="mt-1 bg-emerald-100 rounded-full p-0.5">
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
        className={`w-full py-4 rounded-2xl text-white font-sans font-semibold tracking-wide transition-colors cursor-pointer ${buttonClass}`}
      >
        Select {title}
      </button>
    </div>
  );
}
