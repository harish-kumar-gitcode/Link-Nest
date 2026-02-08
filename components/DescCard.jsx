export default function DescCard({ Icon, desc }) {
  return (
    <>
      <div className="flex gap-2 items-center justify-start border border-gray-300 w-[200px] h-[48px] rounded-lg bg-gray-50 pl-6">
        <Icon className="w-[24px] h-[24px] text-gray-400" />
        <p className="text-lg">{desc}</p>
      </div>
    </>
  );
}
