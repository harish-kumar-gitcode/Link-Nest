export default function Loading() {
  return (
    <div className="mx-5 animate-pulse">
      <div className="h-8 w-40 bg-gray-200 rounded mb-4"></div>

      <div className="space-y-2">
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
