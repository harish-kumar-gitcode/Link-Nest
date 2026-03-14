export default function DescCard({ Icon, desc }) {
  return (
    <>
      <div className="flex gap-1 md:gap-2 px-4 py-2 md:px-0 md:py-0 items-center justify-start border border-gray-300 md:w-[200px] md:h-[48px] rounded-lg bg-gray-50 md:pl-6">
        <Icon className="h-4 w-4 md:w-[24px] md:h-[24px] text-gray-400" />
        <p className="text-sm md:text-lg">{desc}</p>
      </div>
    </>
  );
}
