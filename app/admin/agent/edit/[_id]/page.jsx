import EditAgent from "@/components/adminComp/EditAgent";

export const metadata = {
  title: "Edit Agent | Privy Pad",
};

export default async function HomePage({ params }) {
  const { _id } = await params;

  return <EditAgent id={_id}></EditAgent>;
}
