export default async function HomePage({ params }) {
  const { _id } = await params;
  console.log(_id);
  return <h1>Welcome to edit {_id}</h1>;
}
