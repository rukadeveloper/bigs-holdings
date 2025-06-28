import React, { Dispatch, SetStateAction, useEffect } from "react";

import { FiChevronDown } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
} from "../../ui/dropdown-menu";
import {
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

export default function WriteFormSelectWrapper({
  category,
  categoryIdx,
  setCategoryIdx,
}: {
  category: string[];
  categoryIdx: number;
  setCategoryIdx: Dispatch<SetStateAction<number>>;
}) {
  useEffect(() => {
    console.log(categoryIdx);
  }, [categoryIdx]);
  return (
    <DropdownMenu>
      <div className="write-form-select w-full flex flex-col relative">
        <h2 className="text-xl font-bold inline-block mb-[1rem]">
          카테고리 선택하기
        </h2>
        <DropdownMenuTrigger className="cursor-pointer md:w-[calc((100%_-_160px)/3)] xxxsm:w-[40%] w-full py-[2rem] px-[1.4rem] bg-[#F8F8F8] text-[rgba(0,0,0,.34)] flex justify-between items-center">
          <span>{category[categoryIdx]}</span>
          <FiChevronDown size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuRadioGroup
            value={String(categoryIdx)}
            onValueChange={(val) => setCategoryIdx(Number(val))}
          >
            {category.map((c, i) => (
              <DropdownMenuRadioItem key={c} value={String(i)}>
                {c}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
}
