import connectDB from "@/lib/db";
import agent from "@/models/agent";
import listings from "@/models/listings";
import ViewAgentListing from "@/components/adminComp/ViewAgentListing";

export default async function HomePage({ params }) {
  const { _id } = await params;

  // DB LOgic and fetching data.
  await connectDB();
  const matchedAgent = await agent.findOne({ _id });
  const matchedListing = await listings.find({ agent: _id }).lean();

  // Cleaner arch for the styles of agent.
  const statusStyle = {
    active: "text-green-600",
    suspended: "text-orange-600",
    deleted: "text-red-600",
    undefined: "text-blue-600",
  };

  const planStyle = {
    basic: "text-zinc-600",
    standard: "text-green-400",
    premium: "text-fuchsia-600",
  };

  return (
    <>
      {/* Outer container for the page. */}
      <div className="mx-5">
        {/* Container for header. */}
        <div className="flex justify-between my-5">
          <h1 className="text-3xl font-medium">{matchedAgent.name}</h1>
          <div>
            <h1>
              Status:{" "}
              <span
                className={`text-lg ${
                  statusStyle[matchedAgent.status]
                } font-medium`}
              >
                {matchedAgent.status === undefined
                  ? "Unknown"
                  : matchedAgent.status}
              </span>
            </h1>
            <p>
              Plan:{" "}
              <span
                className={`text-lg font-medium ${
                  planStyle[matchedAgent.plan]
                }`}
              >
                {matchedAgent.plan === undefined ? "Basic" : matchedAgent.plan}
              </span>
            </p>
          </div>
        </div>
        {/* The listings go here through a component */}
        <ViewAgentListing
          listing={JSON.parse(JSON.stringify(matchedListing))}
        />
      </div>
    </>
  );
}
