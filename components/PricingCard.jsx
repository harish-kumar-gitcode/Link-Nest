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
      className={`relative rounded-[32px] border p-8 flex flex-col shrink-0 
      w-[85%] md:w-full snap-center transition-all duration-300 
      md:hover:translate-y-[-8px] shadow-sm hover:shadow-2xl ${background} bg-white`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest z-10">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-serif text-slate-900">{title}</h3>
        <p className="text-xs text-slate-500 mt-1 font-sans line-clamp-2">
          {desc}
        </p>
      </div>

      <div className="mb-8">
        <span className="text-4xl font-bold text-slate-900">{price}</span>
        {title === "Unlimited" && (
          <span className="text-slate-400 text-sm ml-1">/mo</span>
        )}
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-left">
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
        className={`w-full py-4 rounded-2xl text-white font-sans font-semibold tracking-wide transition-colors cursor-pointer ${buttonClass}`}
      >
        Select {title}
      </button>
    </div>
  );
}
