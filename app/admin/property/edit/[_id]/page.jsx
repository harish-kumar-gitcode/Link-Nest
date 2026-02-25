import EditProperty from "@/components/adminComp/EditProperty";

export default async function EditPropertyPage({ params }) {
  const { _id } = await params;

  return (
    <>
      <EditProperty id={_id} />
    </>
  );
}
