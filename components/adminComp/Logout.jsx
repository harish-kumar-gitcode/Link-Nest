"use client";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();
  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });
    alert("Logged out successfully.");
    router.replace("/login");
  };

  return (
    <>
      <div className="h-full flex justify-center items-center">
        <div className="shadow-lg rounded-lg w-100 h-40 border border-gray-200">
          <h1 className="text-center mt-5 text-lg">
            Are you sure you want to logout?
          </h1>
          <div className="flex justify-evenly mx-5 items-center h-full pb-15">
            <button
              className="px-6 py-1 rounded-md border border-gray-200 bg-gray-200 cursor-pointer hover:bg-gray-300 transition-all duration-200"
              onClick={() => window.location.assign("/dashboard")}
            >
              Cancel
            </button>
            <button
              className="px-6 py-1 rounded-md border border-red-600 bg-red-600 cursor-pointer hover:bg-red-700 text-white transition-all duration-200"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
