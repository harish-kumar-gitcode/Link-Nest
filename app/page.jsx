//All imports go here.
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowitWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import CTAsection from "@/components/CTA";
import Link from "next/link";

//This is the metadata for homepage.
export const metadata = {
  title: "Privy Pad | Homepage",
  description: "Get better quality leads without distractions.",
  openGraph: {
    title: "Privy Pad | HomePage",
    description: "Get better quality leads without distractions.",
    image: "/images/hero.webp",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* ------Hero Section------ */}
      <div className="flex flex-col md:flex-row md:w-full items-center justify-between px-6 py-10 md:px-12 md:bg-gray-100 md:h-[80vh] gap-8">
        {/* Text Content Area */}
        <div className="mt-[54%] md:mt-0 relative w-full md:w-[60%]">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight md:leading-[1.1]">
            Share property links. <br />
            Close faster.
          </h1>

          <p className="text-sm mt-2 text-gray-500 md:text-gray-800 text-lg md:text-xl md:max-w-[60%]">
            Share clean, private property pages instead of long{" "}
            <span className="text-green-600 font-medium">WhatsApp</span> chats.
            <br className="md:block" />
            Built for real estate agents. Not a{" "}
            <strike className="text-red-600 decoration-2">
              listing portal.
            </strike>
          </p>

          <div className="mt-6">
            <Link
              href="/request-demo"
              className="inline-block px-6 py-3 text-white rounded-full bg-blue-700 text-lg font-semibold transition-all hover:bg-white hover:text-blue-700 border border-transparent hover:border-blue-700 shadow-lg hover:shadow-none"
            >
              Get a Demo Page
            </Link>
          </div>
        </div>

        {/* Image Container */}
        {/* w-full on mobile, md:w-1/2 on desktop to prevent overlap */}
        <div className="absolute top-5 md:relative w-full opacity-80 md:opacity-100 h-[300px] md:w-[40%] md:h-100">
          <Image
            src="/images/hero.webp"
            alt="Hero image with sample page."
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      {/* ------How It Works------ */}
      <div className="ml-4 md:ml-0 md:mt-10 md:pl-4" id="how-it-works">
        <h1 className="text-5xl md:text-7xl font-semibold text-gray-900">
          How it works?
        </h1>
        {/* ------Step-1------ */}
        <HowitWorks
          step={1}
          color="text-blue-600"
          title="We create your property page"
          desc="You share the details. We build a clean, private page with photos and a WhatsApp button. No setup, no dashboard needed."
          source="/images/step-1.webp"
          textanimate="animate-[fade-in-left_0.5s_ease-out_forwards]"
          imganimate="animate-[fade-in-down_0.8s_ease-out_forwards]"
        />
        {/* ------Step-2------ */}
        <HowitWorks
          step={2}
          color="text-teal-600"
          title="You share the link"
          desc="Send it on WhatsApp or follow-ups instead of typing long messages. Works with WhatsApp, follow-ups, and QR codes."
          source="/images/step-2.webp"
          textanimate="animate-[fade-in-left_0.5s_ease-out_forwards]"
          imganimate="animate-[fade-in-down_0.8s_ease-out_forwards]"
          reverse
        />
        {/* ------Step-3------ */}
        <HowitWorks
          step={3}
          color="text-green-600"
          title="Buyers message you directly"
          desc="Interested buyers tap once and start a WhatsApp conversation with you. Buyers reach you directly — no middlemen."
          source="/images/step-3.webp"
          textanimate="animate-[fade-in-left_0.5s_ease-out_forwards]"
          imganimate="animate-[fade-in-down_0.8s_ease-out_forwards]"
        />
      </div>
      <WhyChooseUs animateimage="animate-[fade-in-left_0.7s_ease-out_forwards]"></WhyChooseUs>
      {/* ----Pricing---- */}
      <div id="pricing">
        <Pricing></Pricing>
      </div>
      {/* ----CTA section---- */}
      <CTAsection />
      <Footer />
    </div>
  );
}
