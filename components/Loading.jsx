export default function Loading({ children }) {
  return (
    <>
      <div className="w-full h-150 flex flex-col justify-center items-center">
        <div className="border border-gray-300 w-20 h-20 rounded-full border-6 border-t-blue-600 animate-spin [animation-duration:2s] [animation-timing-function:ease-in-out]"></div>
        <h1 className="text-xl mt-2 font-medium text-gray-600">{children}</h1>
      </div>
    </>
  );
}
