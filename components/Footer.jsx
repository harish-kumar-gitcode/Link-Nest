import {
  Instagram,
  Facebook,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="bg-black h-[300px] grid grid-cols-5 gap-5 text-white pt-5 px-5">
        <div className=" flex flex-col gap-3">
          {/* ---BRAND NAME & TAGLINE--- */}
          <div>
            <h1 className="text-neutral-300 text-5xl font-medium ">
              Link Nest
            </h1>
            <p className=" text-sm text-gray-400">
              Share property links. Close faster.
            </p>
          </div>
          {/* ---ABOUT US--- */}
          <div>
            <h2 className="text-xl text-mist-200">About Us</h2>
            <p className="text-sm text-gray-400">
              The ultimate toolkit for modern real estate agents. We create
              stunning landing pages that turns leads into clients.
            </p>
          </div>
          {/* ---SOCIAL MEDIA LINKS--- */}
          <div>
            <h2 className="text-lg">Social Links</h2>
            {/* ---INSTAGRAM--- */}
            <div className="flex gap-2 mt-1">
              <Link
                href="https://www.linkedin.com/company/privy-pad"
                target="_blank"
                className="p-2 border border-gray-500 rounded-full bg-slate-900 hover:text-blue-300 hover:scale-[1.05] hover:border-blue-300 transition-all duration-300"
              >
                <Linkedin />
              </Link>
              <Link
                href="https://www.instagram.com/privypad"
                target="_blank"
                className="p-2 border border-gray-500 rounded-full bg-slate-900 hover:text-pink-500 hover:scale-[1.05] hover:border-purple-300 transition-all duration-300"
              >
                <Instagram />
              </Link>
              {/* ---FACEBOOK--- */}
              <Link
                href="https://www.facebook.com/privypadofficial"
                target="_blank"
                className="p-2 border border-gray-500 rounded-full bg-slate-900 hover:text-blue-500 hover:scale-[1.05] hover:border-blue-300 transition-all duration-300"
              >
                <Facebook />
              </Link>
              {/* ---WHATSAPP--- */}
              <Link
                href="#"
                className="p-2 border border-gray-500 rounded-full bg-slate-900 hover:text-green-500 hover:scale-[1.05] hover:border-green-300 transition-all duration-300"
              >
                <FaWhatsapp size={24} />
              </Link>
            </div>
          </div>
        </div>
        {/* -----QUICK LINKS----- */}
        <div className="justify-items-center">
          <h1 className="text-2xl text-gray-300 font-medium">Quick Links</h1>
          <div className="text-base text-gray-300 flex flex-col ">
            {/* ---HOME--- */}
            <Link
              href="/"
              target="_blank"
              className="hover:text-gray-400 hover:scale-[1.05] transition-all duration-300 "
            >
              Home
            </Link>
            {/* ---DEMO--- */}
            <Link
              href="/request-demo"
              target="_blank"
              className="hover:text-gray-400 hover:scale-[1.05] transition-all duration-300"
            >
              Request a Demo
            </Link>
            {/* ---SERVICES--- */}
            <Link
              href="/"
              target="_blank"
              className="hover:text-gray-400 hover:scale-[1.05] transition-all duration-300"
            >
              Services
            </Link>
            {/* ---BLOG--- */}
            <Link
              href="/"
              target="_blank"
              className="hover:text-gray-400 hover:scale-[1.05] transition-all duration-300"
            >
              Blog
            </Link>
          </div>
        </div>
        {/* -----POLICIES----- */}
        <div className="justify-items-start">
          <h1 className="text-2xl font-medium text-gray-300">Policies</h1>
          <div className="text-gray-300 text-base flex flex-col">
            {/* ---TERMS & CONDITIONS--- */}
            <Link
              href="/policies/terms-and-conditions"
              target="_blank"
              className="hover:text-gray-400 hover:scale-[1.05] transition-all duration-300"
            >
              Terms & Conditions
            </Link>
            {/* ---PRIVACY POLICY--- */}
            <Link
              href="/policies/privacy-policy"
              target="_blank"
              className="hover:text-gray-400 hover:scale-[1.05] transition-all duration-300"
            >
              Privacy policy
            </Link>
            {/* ---REFUND POLICY--- */}
            <Link
              href="/policies/refund-policy"
              target="_blank"
              className="hover:text-gray-400 hover:scale-[1.05] transition-all duration-300"
            >
              Refund policy
            </Link>
          </div>
        </div>
        {/* ---CONTACT INFORMATION--- */}
        <div className="col-span-2 justify-items-center">
          <h1 className="text-2xl font-medium text-gray-300">Contact</h1>
          <div className="flex flex-col gap-3 mt-3">
            {/* ---EMAIL--- */}
            <div className="flex gap-2 items-center">
              <Mail className="stroke-gray-400 bg-black h-7 w-7" />
              <p className="text-lg text-gray-300">support@linknest.co.in</p>
            </div>
            {/* ---PHONE--- */}
            <div className="flex gap-2 items-center">
              <Phone className="stroke-gray-400 h-7 w-7" />
              <p className="text-lg text-gray-300">+91 82176 68420</p>
            </div>
            {/* ---LOCATION--- */}
            <div className="flex gap-2 items-center">
              <MapPin className="stroke-gray-400 h-7 w-7" />
              <p className="text-lg text-gray-300">Bangalore, India</p>
            </div>
          </div>
          {/* ---CLOSING LINE--- */}
          <div className="mt-2 flex justify-end w-full">
            <h1 className="font-medium text-blue-500">
              BE AHEAD OF THE MARKET .!
            </h1>
          </div>
          {/* ---SUBSCRIBE--- */}
          <div className="w-full flex justify-center mt-4">
            <div className="relative">
              <h1 className="ml-2 mb-1 text-gray-300">
                Subscribe to our newsletters
              </h1>
              <input
                type="email"
                autoComplete="new-email"
                className="border border-white w-100 px-3 py-2 rounded-full"
                placeholder="Enter your email"
              />
              <button className="absolute top-7 right-0 border border-l-none right-0 rounded-full py-2 px-6 bg-blue-900 text-white text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center bg-blue-100">
        &copy; All rights reserved to{" "}
        <span className="text-blue-900">Link Nest Pvt Ltd.</span>
      </p>
    </>
  );
}
