"use client";

import Image from "next/image";
import {IoSearch, IoGlobeOutline, IoMenuOutline} from "react-icons/io5";
import {FaUserCircle} from "react-icons/fa";
import {FaUserGroup} from "react-icons/fa6";
import {useState} from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import {DateRangePicker} from "react-date-range";
import {addDays} from "date-fns";
import Link from "next/link";
import {useRouter} from "next/navigation";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [guestNumber, setGuestNumber] = useState(1);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const router = useRouter();
  console.log(router);

  const searchFn = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: state.startDate,
        endDate: state.endDate,
        noOfGuest: guestNumber,
      },
    });
  };

  const resetSearch = () => {
    setSearchInput("");
  };

  return (
    <header className="sticky items-center bg-white top-0 z-50 p-5 grid grid-cols-3 md:px-10 shadow-md">
      {/* left */}
      <Link href={"/"}>
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
      </Link>
      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
            rangeColors={["#f87171"]}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="flex-grow font-semibold text-2xl">
              Number of Guests
            </h2>
            <FaUserGroup className="h-8 text-lg " />
            <input
              type="number"
              className="w-12 text-lg outline-none text-red-400 pl-2 font-semibold"
              value={guestNumber}
              min={1}
              onChange={(e) => setGuestNumber(e.target.value)}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-600" onClick={resetSearch}>
              Cancel
            </button>
            <button onClick={searchFn} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
