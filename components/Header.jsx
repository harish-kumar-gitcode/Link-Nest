import Link from "next/link";

const linkHover = " hover:transition-all hover:duration-500 hover:scale-[1.2]";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[35px] font-medium mx-4 my-2">Link Nest</h1>
      <nav className="flex items-center gap-6 text-xl mr-4 font-normal">
        <Link href="#how-it-works" className={linkHover}>
          How it works
        </Link>
        <Link href="#" className={linkHover}>
          Pricing
        </Link>
        <Link
          href="#"
          className="bg-blue-700 p-2 text-white rounded-3xl px-6 hover:bg-white hover:text-blue-700 border-1 border-transparent hover:border-blue-700 hover:transition-all hover:duration-300"
        >
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Header;
