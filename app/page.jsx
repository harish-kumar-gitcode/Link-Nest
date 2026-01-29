//All imports go here.
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowitWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";

//This is the metadata for homepage.
export const metadata = {
  title: "Link Nest - Homepage",
  description: "Get better quality leads without distractions.",
};

const Homepage = () => {
  return (
    <div>
      <Header />
      {/* ------Hero Section------ */}
      <div className="flex justify-between pl-4 bg-gray-100 items-center h-[80vh]">
        <div>
          <h1 className="text-7xl/20 font-bold">
            Share property links. Close faster.
          </h1>
          <p className="text-xl/6 mt-2 w-[75%] text-gray-800">
            Share clean, private property pages instead of long{" "}
            <span className="text-green-600">WhatsApp </span>
            chats. <br />
            Built for real estate agents. Not a{" "}
            <strike className="text-red-600"> listing portal.</strike>
          </p>
          <button className="px-4 py-3 mt-10 text-white rounded-4xl bg-blue-700 text-lg transition cursor-pointer hover:bg-white hover:text-blue-700 border-1 border-transparent hover:border-blue-700">
            Get a Demo Page
          </button>
        </div>
        <div className="relative w-[82%] h-[600px]">
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
      <div className="mt-10 pl-4" id="how-it-works">
        <h1 className="text-7xl font-semibold text-gray-900">How it works?</h1>
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
      <Footer />
    </div>
  );
};

export default Homepage;
