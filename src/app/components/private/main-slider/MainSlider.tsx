import { staticSlider } from "@/app/scripts/staticSlider";
import React, { useEffect, useRef, useState } from "react";
import SwiperSlider from "./SwiperSlider";
import { Button } from "../../ui/button";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { IoPlay, IoStopSharp } from "react-icons/io5";

type Slider = {
  id: number;
  sliderName: string;
  sliderSpan: string;
  sliderImage: string;
  isWhite: boolean;
};

export default function MainSlider() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [idxLength, setIdxLength] = useState(0);

  useEffect(() => {
    if (wrapperRef.current) {
      setIdxLength(wrapperRef.current.children.length);
    }
  });

  return (
    <div
      id="main-slider"
      className="aspect-square relative"
      style={{ width: "60%" }}
    >
      <div
        id="slider-wrapper"
        className="flex h-full overflow-hidden"
        ref={wrapperRef}
      >
        {staticSlider.map((statics: Slider) => (
          <SwiperSlider key={statics.id} slider={statics} />
        ))}
      </div>
      <div
        id="slider-button-wrapper"
        className="absolute bottom-[10px] z-[150] left-[10px] flex items-center p-[0.5rem] bg-black rounded-[30px]"
      >
        <Button
          className="bg-transparent md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
          onClick={() => {
            if (activeIdx == 0) {
              setActiveIdx(idxLength - 1);
            } else {
              setActiveIdx((prev) => prev - 1);
            }

            if (wrapperRef.current) {
              const child = Array.from(
                wrapperRef.current!.children
              ) as HTMLElement[];

              wrapperRef.current!.insertBefore(
                child[child.length - 1],
                child[0]
              );

              child.forEach((ell, idxx) => {
                ell.style.transform = `translateX(-100%)`;
                ell.style.transition = `none`;
              });

              setTimeout(() => {
                child.forEach((el, idx) => {
                  el.style.transform = `translateX(0)`;
                  el.style.transition = `transform ease-in-out 1s`;
                });
              }, 0);
            }
          }}
        >
          <span className="sr-only">앞으로 가는 버튼</span>
          <IoChevronBackOutline size={30} color={"#fff"} />
        </Button>
        <div className="text-white flex items-center gap-[4px]">
          <span className="md:text-[1rem] text-[0.85rem]">{activeIdx + 1}</span>
          <span className="md:text-[1rem] text-[0.85rem]">/</span>
          <span className="md:text-[1rem] text-[0.85rem]">{idxLength}</span>
        </div>
        <Button
          className="bg-transparent md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
          onClick={() => {
            setActiveIdx((prev) => (prev + 1) % 3);

            if (wrapperRef.current) {
              const child = Array.from(
                wrapperRef.current.children
              ) as HTMLElement[];

              child.forEach((el, idx) => {
                el.style.transform = `translateX(-100%)`;
                el.style.transition = `transform ease-in-out 1s`;
              });

              setTimeout(() => {
                wrapperRef.current!.appendChild(child[0]);
                child.forEach((ell, idxx) => {
                  ell.style.transform = `translateX(0)`;
                  ell.style.transition = `none`;
                });
              }, 1000);
            }
          }}
        >
          <span className="sr-only">뒤로 가는 버튼</span>
          <IoChevronForwardOutline size={30} color={"#fff"} />
        </Button>
      </div>
    </div>
  );
}
