import { Slide } from "@/types/slide";
import Image from "next/image";
import React from "react";

const SliderWrapper: React.FC<Slide> = (props) => {
  return (
    <div className="h-full bg-subtle rounded-md p-3 flex flex-col justify-between">
      <div className="w-full aspect-[16/7] relative">
        <Image layout="fill" src={props.image} alt="slider" />
      </div>
      <h5 className="text-xl text-primary font-semibold">{props.title}</h5>
      <p className="text-xl text-white font-semibold">{props.content}</p>
    </div>
  );
};

export default SliderWrapper;
