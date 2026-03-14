import { getListingbySlug } from "@/lib/listings";
import Gallery from "@/components/Gallery";
import DescCard from "@/components/DescCard";
import {
  MapPin,
  DoorOpen,
  RulerDimensionLine,
  LandPlot,
  Building2,
} from "lucide-react";
import AgentCard from "@/components/AgentCard";
import Footer from "@/components/Footer";
import PropertyMapClient from "@/components/PropertyMapClient";
import PropertyDetails from "@/components/PropertyDetails";
import NotFoundProp from "@/components/NotFoundProperty";

/**
 * 🔹 DYNAMIC METADATA
 * Next.js automatically dedupes the 'getListingbySlug' call,
 * so it won't hit your database twice.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const listing = await getListingbySlug(slug);

  if (!listing) {
    return {
      title: "Property Not Found | Privy Pad",
    };
  }

  return {
    title: `${listing.title} - ₹${listing.price.toLocaleString(
      "en-IN"
    )} | Privy Pad`,
    description:
      listing.desc?.substring(0, 155) ||
      `View this property in ${listing.location.area}`,
    openGraph: {
      title: listing.title,
      description: `Check out this listing on Privy Pad located in ${listing.location.area}`,
      images: [
        {
          url: listing.images?.[0], // Uses your first image for social previews
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

/**
 * 🔹 PAGE COMPONENT
 */
export default async function PropertyPage({ params }) {
  const { slug } = await params;
  const listing = await getListingbySlug(slug);

  if (!listing) {
    return <NotFoundProp />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* -----Header/Hero----- */}
      <header>
        <h1 className="text-3xl md:text-4xl my-3 ml-5 md:ml-20 font-semibold text-blue-900">
          Privy <span className="text-green-800"> Pad</span>
        </h1>
      </header>

      <main className="flex-grow">
        {/* -----Gallery Section----- */}
        <div className="mx-0 md:mx-20">
          <Gallery
            images={listing.images}
            title={listing.title}
            price={listing.price}
          />
        </div>

        {/* -----Features Section----- */}
        {/* Changed to flex-wrap and responsive margins for mobile */}
        <div className="flex flex-wrap justify-start md:justify-between mx-5 md:mx-20 mt-8 gap-4">
          <DescCard Icon={LandPlot} desc={`${listing.area} sq.ft`} />
          <DescCard Icon={MapPin} desc={listing.location.area} />
          <DescCard
            Icon={RulerDimensionLine}
            desc={`${listing.length} x ${listing.breadth} ft`}
          />
          <DescCard Icon={DoorOpen} desc={listing.facing} />
          <DescCard Icon={Building2} desc={listing.type} />
        </div>

        {/* -----Map & Agent Detail Section----- */}
        {/* Mobile: Stacked (flex-col) | Desktop: Side-by-side (flex-row) */}
        <div className="mt-8 flex flex-col md:flex-row mx-5 md:mx-20 gap-8">
          {/* Map Container */}
          <div className="w-full md:w-[65%] h-[300px] md:h-[400px] z-[1] rounded-xl overflow-hidden shadow-md">
            <PropertyMapClient
              lat={listing.location.lat}
              lng={listing.location.lng}
            />
          </div>

          {/* Agent & Address Sidebar */}
          <div className="w-full md:w-[35%] flex flex-col gap-4">
            <AgentCard
              name={listing.agent.name}
              number={listing.agent.number}
              image={listing.agent.image}
            />

            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100 gap-3">
              <MapPin className="text-blue-600 h-6 w-6 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Address</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {listing.location.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* -----Property Details/Description----- */}
        <div className="border mb-6 mt-6 border-gray-200 shadow-sm mx-5 md:mx-20 rounded-2xl md:my-10 p-2 md:p-6 bg-white">
          <PropertyDetails desc={listing.desc} />
        </div>
      </main>

      {/* -----Footer----- */}
      <Footer />
    </div>
  );
}
