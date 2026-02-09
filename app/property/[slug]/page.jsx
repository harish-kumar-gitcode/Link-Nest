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
import Link from "next/link";
import PropertyDetails from "@/components/PropertyDetails";

export default async function PropertyPage({ params }) {
  const { slug } = await params;

  const listing = await getListingbySlug(slug);

  if (!listing) {
    return <h1>Property not found</h1>;
  }

  return (
    <>
      <div>
        {/* -----Hero Section----- */}
        <div className="ml-4">
          <Link href="/">
            <h1 className="text-4xl font-semibold mt-2 mb-4">Link Nest</h1>
          </Link>
        </div>
        <div className="mx-20">
          <Gallery
            images={listing.images}
            title={listing.title}
            price={listing.price}
          />
        </div>
        {/* -----Features----- */}
        <div className="flex justify-between mx-20 mt-5">
          <DescCard Icon={LandPlot} desc={listing.area} />
          <DescCard Icon={MapPin} desc={listing.location.area} />
          <DescCard
            Icon={RulerDimensionLine}
            desc={`${listing.length} x ${listing.breadth}`}
          />
          <DescCard Icon={DoorOpen} desc={listing.facing} />
          <DescCard Icon={Building2} desc={listing.type} />
        </div>
        {/* -----Map & Agent detail----- */}
        <div className="mt-5 flex mx-20 gap-6">
          <div className="w-[65%] h-[350px] my-3 z-[-1]">
            <PropertyMapClient
              lat={listing.location.lat}
              lng={listing.location.lng}
            />
          </div>
          <div className="w-[50%] h-auto mt-3">
            <AgentCard
              name={listing.agent.name}
              number={listing.agent.number}
              image={listing.agent.image}
            />
            <div className="flex h-[120px] mt-3 items-center gap-1">
              <MapPin className="text-gray-500 h-[30px] w-[30px]" />
              <p className="text-md text-gray-700">
                {listing.location.address}
              </p>
            </div>
          </div>
        </div>
        {/* -----Property Details----- */}
        <div className="border border-gray-300 shadow-lg mx-20 rounded-lg">
          <PropertyDetails desc={listing.desc} />
        </div>

        {/* -----Footer----- */}
        <div className="mt-5">
          <Footer />
        </div>
      </div>
    </>
  );
}
