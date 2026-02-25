"use client";

export default function SidebarItem({ icon: Icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 p-2 rounded cursor-pointer transition mb-1 h-12
        ${active ? "bg-blue-100" : "hover:bg-blue-50"}`}
    >
      <Icon
        className={`${active ? "text-blue-600" : "text-gray-500"}`}
        size={21}
      />
      <span>{label}</span>
    </div>
  );
}
