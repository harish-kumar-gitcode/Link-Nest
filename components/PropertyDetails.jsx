export default function PropertyDetails({ desc }) {
  return (
    <>
      <div className="ml-6 mt-3 mb-5">
        <h1 className="text-3xl mb-3 font-medium">Property Details</h1>
        <p className="whitespace-pre-line">{desc}</p>
      </div>
    </>
  );
}
