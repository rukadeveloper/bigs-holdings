import React, { Dispatch, SetStateAction } from "react";

import { FiChevronDown } from "react-icons/fi";
import SelectAtom from "./SelectAtom";

export default function JoinEmailSelect({
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
    <div className="join-select mmd:flex-[17.6875_1_0] w-full relative">
      <button
        className="py-[0.995rem] mmd:mt-0 mt-[1.2rem] border-b border-solid border-[rgba(0,0,0,.35)] w-full flex justify-between items-center"
        type="button"
        onClick={() => {
          setIsSelect(true);
        }}
      >
        <span>{select[selectIdx]}</span>
        <FiChevronDown size={18} />
      </button>
      <SelectAtom
        select={select}
        selectIdx={selectIdx}
        setSelectIdx={setSelectIdx}
        isSelect={isSelect}
        setIsSelect={setIsSelect}
      />
    </div>
  );
}
