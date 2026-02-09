import Image from "next/image";
import { Phone } from "lucide-react";

export default function AgentCard({ name, image, number, whatsapp }) {
  function addSpace(str, index) {
    return str.slice(0, index) + " " + str.slice(index);
  }
  const formattedNumber = number.startsWith("+91") ? number : `+91 ${number}`;
  return (
    <>
      <div className="border border-gray-200 w-full h-[54%] rounded-md px-3 py-2 flex flex-col justify-between">
        <div className="flex items-center gap-5">
          <div className="relative w-[60px] h-[60px]">
            <Image
              src={image}
              fill
              className="object-cover rounded-full"
              unoptimized
            />
          </div>
          <div>
            <h1 className="text-3xl font-normal">{name}</h1>
            <h3 className="text-lg text-gray-700">+91 {addSpace(number, 5)}</h3>
          </div>
          <div className="ml-auto mr-3 cursor-pointer transition-all hover:scale-[1.1]">
            <a
              href={`tel:${formattedNumber}`}
              tel
              className="px-4 py-4 rounded-full"
            >
              <Phone className="text-green-700" />
            </a>
          </div>
        </div>

        <div className="flex items-start mb-3 justify-center">
          <button className="flex items-center h-[100%] bg-green-600 rounded-lg w-65 pl-5 gap-2 text-white text-xl py-2 cursor-pointer hover:shadow-lg hover:bg-green-700 hover:scale-[0.95] transition-all duration-300">
            <Image src="/images/whatsapp.webp" height={40} width={40} />
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </>
  );
}
