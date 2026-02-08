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
          <DescCard Icon={MapPin} desc={listing.location.address} />
          <DescCard
            Icon={RulerDimensionLine}
            desc={`${listing.length} x ${listing.breadth}`}
          />
          <DescCard Icon={DoorOpen} desc={listing.facing} />
          <DescCard Icon={Building2} desc={listing.type} />
        </div>
        {/* -----Description----- */}
        <div className="mx-20 mt-5 flex justify-between">
          <div className="border border-gray-200 w-[32%] rounded-lg h-[470px] px-4 py-3">
            <h3 className="text-xl font-medium">Description</h3>
            <p className="text-gray-800">{listing.desc}</p>
          </div>
          <div className="w-[50%] h-[500px] mr-20">
            <AgentCard
              name={listing.agent.name}
              number={listing.agent.number}
              image={listing.agent.image}
            />
            <div className="w-[85%] h-auto my-3">
              <PropertyMapClient
                lat={listing.location.lat}
                lng={listing.location.lng}
              />
            </div>
          </div>
        </div>

        {/* -----Footer----- */}
        <div className="mt-5">
          <Footer />
        </div>
      </div>
    </>
  );
}
