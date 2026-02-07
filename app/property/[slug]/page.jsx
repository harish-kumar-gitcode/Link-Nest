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
      <div>
        <div className="ml-4">
          <h1 className="text-4xl font-semibold mt-2 mb-4">Link Nest</h1>
        </div>
        <div className="mx-20">
          <Gallery
            images={listing.images}
            title={listing.title}
            price={listing.price}
          />
        </div>
      </div>
    </>
  );
}
