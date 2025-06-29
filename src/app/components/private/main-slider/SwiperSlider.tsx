import React from "react";

type Slider = {
  id: number;
  sliderName: string;
  sliderSpan: string;
  sliderImage: string;
  isWhite: boolean;
};

export default function SwiperSlider({ slider }: { slider: Slider }) {
  return (
    <div className="swiper-slider shrink-0 basis-full relative after:content-[''] after:absolute after:inset-0 after:bg-[rgba(0,0,0,.35)] after:z-[20] xsm:after:content-none rounded-[1rem] xsm:block flex flex-col gap-2 justify-center items-center overflow-hidden">
      <img
        src={slider.sliderImage}
        alt={slider.sliderName}
        className="w-full h-full object-fit xsm:relative absolute inset-0"
      />
      <h2
        className={`xsm:absolute relative xsm:top-10 top-0 xsm:left-10 left-0 md:text-[1.4rem] ssm:text-[1.1rem] text-[0.85rem] ${
          slider.isWhite ? "text-white" : "text-black"
        } z-[40]`}
      >
        {slider.sliderName}
      </h2>
      <span
        className={`xsm:absolute relative xsm:top-[70px] top-0 xsm:left-10 left-0 xsm:text-left text-center md:text-[1.8rem] ssm:text-[1.4rem] text-[1.05rem] ${
          slider.isWhite ? "text-white" : "text-black"
        } font-bold z-[20]`}
      >
        {slider.sliderSpan.split("|")[0]}
        <br />
        {slider.sliderSpan.split("|")[1]}
      </span>
    </div>
  );
}
