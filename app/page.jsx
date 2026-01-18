//All imports go here.
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//This is the metadata for homepage.
export const metadata = {
  title: "Link Nest | Homepage",
  description: "Get better quality leads without distractions.",
};

const Homepage = () => {
  return (
    <div>
      <Header />
      {/* ------Hero Section------ */}
      <div className="flex justify-between pl-4 bg-gray-100 items-center">
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
        <img
          src="/images/hero.png"
          alt="Hero image with sample page."
          width="52%"
        />
      </div>
      {/* ------How It Works------ */}
      <div className="mt-10 pl-4">
        <h1 className=" text-6xl font-semibold">How it works</h1>
        {/* ------Step 1------ */}
        <div className="flex justify-between items-center mx-20 ">
          <div>
            <h4 className="text-4xl font-medium text-blue-600 ">
              Step 1: We create your property page
            </h4>
            <p className="w-[65%] pt-2">
              You share the details. We build a clean, private page with photos
              and a WhatsApp button. No setup, no dashboard needed.
            </p>
          </div>
          <img src="/images/step-1.png" alt="" width="30%" />
        </div>
        {/* ------Step 2------ */}
        <div className="flex justify-between items-center mx-30">
          <img src="/images/step-2.png" alt="" width="30%" />
          <div>
            <h4 className="text-4xl font-medium text-teal-600">
              Step 2: You share the link
            </h4>
            <p className="w-[65%] pt-2">
              Send it on WhatsApp or follow-ups instead of typing long messages.
              Works with WhatsApp, follow-ups, and QR codes.
            </p>
          </div>
        </div>
        {/* ------Step 3------ */}
        <div className="flex justify-between items-center mx-20">
          <div>
            <h4 className="text-4xl font-medium text-green-600">
              Step 3: Buyers message you directly
            </h4>
            <p className="w-[65%] pt-2">
              Interested buyers tap once and start a WhatsApp conversation with
              you. Buyers reach you directly — no middlemen.
            </p>
          </div>
          <img src="/images/step-3.png" alt="" width="30%" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
