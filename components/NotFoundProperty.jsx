export default function NotFoundProp() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[100vh] gap-1">
        <h1 className="text-6xl font-medium">Oops! That's sad</h1>
        <p className="text-gray-500">
          The property you are looking for does not exists.
        </p>
        <p className="text-gray-700">
          Visit our demo page or contact your dealer.
        </p>
        <button className="underline text-xl cursor-pointer">View Demo</button>
      </div>
    </>
  );
}
