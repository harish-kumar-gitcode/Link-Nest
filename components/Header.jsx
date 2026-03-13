import Link from "next/link";

const linkHover = " hover:transition-all hover:duration-500 hover:scale-[1.2]";

const Header = () => {
  return (
    <div className="flex items-center justify-between md:flex md:items-center md:justify-between">
      <h1 className="font-bold text-3xl ml-4 mt-2 md:font-bold md:text-4xl text-blue-950 md:mx-4 md:my-4">
        Privy <span className="text-green-800">Pad</span>
      </h1>
      <nav className="hidden md:flex md:items-center md:gap-6 md:text-xl md:mr-4 md:font-normal">
        <Link href="#how-it-works" className={linkHover}>
          How it works
        </Link>
        <Link href="#pricing" className={linkHover}>
          Pricing
        </Link>
        <Link
          href="#"
          className="bg-blue-700 md:p-2 text-white rounded-3xl md:px-6 md:hover:bg-white md:hover:text-blue-700 md:border-1 md:border-transparent md:hover:border-blue-700 md:hover:transition-all md:hover:duration-300"
        >
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Header;
