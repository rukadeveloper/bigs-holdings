import React, { Dispatch, SetStateAction } from "react";

import { FaCheck } from "react-icons/fa6";

export default function SelectAtom({
  select,
  selectIdx,
  setSelectIdx,
  isSelect,
  setIsSelect,
}: {
  select: string[];
  selectIdx: number;
  setSelectIdx: Dispatch<SetStateAction<number>>;
  isSelect: boolean;
  setIsSelect: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`select-atom ${
        isSelect ? "flex" : "hidden"
      } flex-col absolute h-[250px] overflow-scroll overflow-x-hidden top-[calc(100%_+_5px)] left-0 right-0 z-[40] bg-white border border-solid border-black`}
    >
      {select.map((sel: string, i: number) => (
        <button
          className={`px-[1.125rem] py-[1.535rem] flex items-center gap-[1.25rem] ${
            selectIdx === i ? "bg-[#f9f9f9]" : "bg-white"
          }`}
          onClick={() => {
            setSelectIdx(i);
            setIsSelect(false);
          }}
          key={i}
          type="button"
        >
          <FaCheck
            className={`${selectIdx === i ? "text-black" : "text-[#ccc]"}`}
          />
          <span className={`${selectIdx === i ? "text-black" : "text-[#ccc]"}`}>
            {sel}
          </span>
        </button>
      ))}
    </div>
  );
}
