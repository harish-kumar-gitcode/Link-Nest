import Link from "next/link";

const CTAsection = () => {
  return (
    <div className="bg-slate-200 md:h-[300px] h-55 text-center flex flex-col justify-center">
      <div>
        <h3 className="text-5xl md:text-7xl font-semibold mt-4">
          Still confused?
        </h3>
        <p className="text-gray-700">Book a free demo with us.</p>
      </div>
      <div className="mt-5">
        <Link
          href="/request-demo"
          className=" bg-blue-800 px-6 py-3 rounded-full text-white text-md hover:scale-[1.05] hover:bg-color-600 transition-all transition-ease_out duration-300 cursor-pointer"
        >
          Book a demo
        </Link>
      </div>
    </div>
  );
};

export default CTAsection;
