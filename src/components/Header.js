import Image from "next/image";
import {IoSearch, IoGlobeOutline, IoMenuOutline} from "react-icons/io5";
import {FaUserCircle} from "react-icons/fa";

const Header = () => {
  return (
    <header className="sticky items-center bg-white top-0 z-50 p-5 grid grid-cols-3 md:px-10 shadow-md">
      {/* left */}
      <div className="relative flex h-10 items-center cursor-pointer">
        {/* added Image from next/image as it optimised the image by converting the image into webp from jpg and png */}
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="logo"
        />
      </div>
      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          className="bg-transparent outline-none pl-5 flex-1 text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="search"
        />
        <IoSearch className="hidden sm:inline-flex w-8 h-8 p-2 bg-red-400 text-white cursor-pointer rounded-full md:mx-2" />
      </div>
      {/* right */}
      <div className="flex space-x-4 justify-end text-gray-600 items-center">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <IoGlobeOutline className="h-6 cursor-pointer" />
        <div className="rounded-full border-2 flex space-x-2 p-2">
          <IoMenuOutline className="h-6" />
          <FaUserCircle className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
