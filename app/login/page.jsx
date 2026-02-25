"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        pass,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("email", email);
      router.push("/admin/dashboard");
    } else {
      alert(data.message);
    }
  };
  return (
    <>
      <h1 className="text-4xl font-medium mt-2 ml-2">Link Nest</h1>
      <div className="flex justify-center items-center h-[100vh] -translate-y-10">
        <div className="w-80 h-100 border border-gray-300 rounded-xl shadow-xl flex flex-col items-center justify-start">
          <h1 className="text-4xl font-medium mt-10 mb-15">Login</h1>
          <form action={handleLogin} className="flex flex-col gap-2">
            <label htmlFor="email">
              Email: <br />
              <input
                type="email"
                className="border-gray-200 border rounded-sm w-55 focus:border-blue-600 focus:outline-none px-2 invalid:text-red-600 py-1 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <div className="relative">
              <label htmlFor="password">
                Password: <br />
                <input
                  type={showPassword ? "text" : "password"}
                  className="border-gray-200 border rounded-sm w-55 focus:border-blue-600 focus:outline-none px-2 py-1 text-sm"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 bottom-0 text-gray-500 cursor-pointer hover:text-black py-1"
                >
                  {showPassword ? (
                    <Eye className="h-5" />
                  ) : (
                    <EyeClosed className="h-5" />
                  )}
                </button>
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-3 py-1 text-xl w-40 rounded-full bg-purple-600 text-white hover:bg-purple-700 cursor-pointer transition-all duration-200"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>&copy; All rights are reserved to Link Nest.</div>
    </>
  );
}
