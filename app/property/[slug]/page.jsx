import { getListingbySlug } from "@/lib/listings";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default async function PropertyPage({ params }) {
  const { slug } = await params;

  const listing = await getListingbySlug(slug);

  if (!listing) {
    return <h1>Property not found</h1>;
  }

  return (
    <>
      <div className="ml-4">
        <div>
          <h1 className="text-4xl font-bold mt-2">Link Nest</h1>
        </div>
        <div>
          <Gallery images={listing.images} />
        </div>
      </div>
    </>
  );
}
