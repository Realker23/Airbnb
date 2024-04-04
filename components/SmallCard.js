"use client";

import Image from "next/image";
import React, {useState} from "react";

const SmallCard = ({img, location, distance}) => {
  const [imgState, setImgState] = useState(img);
  const fallbackImg = "https://links.papareact.com/2io";
  return (
    <div className=" flex items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* left */}
      <div className="relative h-16 w-16">
        <Image
          src={imgState}
          layout="fill"
          className="rounded-lg"
          onError={() => setImgState(fallbackImg)}
          alt="smallCard"
        />
      </div>

      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
