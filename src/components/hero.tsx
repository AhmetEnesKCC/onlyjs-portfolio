import Image from "next/image";
import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 h-[400px] gap-x-6">
      <div className="h-full flex flex-col items-start justify-center gap-y-5">
        <h4 className="text-3xl">Hello I'm</h4>
        <h1 className="text-5xl">Gülşah</h1>
        <p>
          Merhaba, ben Gülşah. Fullstack developer olarak çalışıyorum. Hem
          frontend hem de backend teknolojilerinde deneyimliyim. Yeni projeler
          geliştirmeyi ve mevcut projeleri iyileştirmeyi seviyorum.
        </p>
        <div className="flex gap-x-4">
          <button className="px-4 py-2 rounded-md bg-primary flex gap-x-4 items-center">
            About Me <BiSolidUser size={18} />
          </button>
          <button className="px-4 py-2 rounded-md border-primary border-2 flex gap-x-4 items-center">
            About Me
            <BsFillEyeFill size={18} />
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="h-full absolute aspect-square bg-primary rounded-full left-1/2 -translate-x-1/2 translate-y-[20%]"></div>
        <Image
          alt="Portfolio"
          objectFit="contain"
          src={"/portfolio-gulsah.png"}
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Hero;
