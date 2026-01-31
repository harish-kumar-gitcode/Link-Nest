const CTAsection = () => {
  return (
    <div className="bg-slate-200 h-[300px] text-center flex flex-col justify-center">
      <div>
        <h3 className="text-7xl font-semibold mt-4">Still confused?</h3>
        <p className="text-gray-700">Book a free demo with us.</p>
      </div>
      <div>
        <button className="mt-5 bg-blue-800 px-6 py-3 rounded-full text-white text-md hover:scale-[1.05] hover:bg-color-600 transition-all transition-ease_out duration-300 cursor-pointer">
          Book a demo
        </button>
      </div>
    </div>
  );
};

export default CTAsection;
