import Link from "next/link";

export default function AgentProp({ name, phone, whatsApp, profile, id }) {
  return (
    <div className="border border-gray-200 w-100 h-50 mr-2 p-5 rounded-sm shadow-lg">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-medium">{name}</h1>
        <img
          src={profile}
          alt="profile-picture"
          className="w-15 h-15 rounded-full object-cover"
        />
      </div>
      <p className="text-xs">
        Phone: <b className="text-sm">{phone}</b>
      </p>
      <div className="h-1/2 flex justify-between items-end">
        <a
          href={whatsApp}
          target="_blank"
          className="py-1 hover:text-gray-500 cursor-pointer"
        >
          WhatsApp Link
        </a>
        <Link
          href={`/admin/agent/view/${id}`}
          className="bg-blue-600 px-3 py-1 text-white rounded-md hover:bg-blue-700"
          target="_blank"
        >
          View listing
        </Link>
        <Link
          href={`/admin/agent/edit/${id}`}
          className="py-1 px-3 bg-orange-600 hover:bg-amber-700 rounded-lg text-white"
          target="_blank"
        >
          Edit details
        </Link>
      </div>
    </div>
  );
}
