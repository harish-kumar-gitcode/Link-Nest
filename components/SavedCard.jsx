"use client";
import { X, Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SavedCard() {
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
  };
  return (
    <>
      <div className="w-full h-[50vh] flex justify-center items-center backdrop-blur-sm z-10">
        <div className="bg-gray-50 h-50 w-100 rounded-md shadow-lg">
          {/* Success check */}
          <div className="flex justify-center mt-5">
            <Check
              className="bg-green-600 text-white rounded-full p-2 animate-bounce"
              size={45}
            />
          </div>
          {/* Success message */}
          <div className="flex flex-col justify-center items-center h-1/3 text-sm font-medium">
            <h1>The demo has been booked successfully.</h1>
            <h1>Our team will contact you shortly.</h1>
          </div>
          {/* Back to home */}
          <div className="flex justify-center">
            <button
              className="border px-6 py-1 rounded-sm bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
              onClick={handleClose}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
