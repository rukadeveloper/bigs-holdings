"use client";

import React, { useEffect } from "react";

import { FiChevronDown } from "react-icons/fi";
import BoardSelectAtom from "./BoardSelectAtom";
import CategoryStore from "@/app/store/CategoryStore";
import { observer } from "mobx-react-lite";

function BoardSelector() {
  const { isSelected, category, changeCategory, changeIsSelected } =
    CategoryStore;

  useEffect(() => {
    return () => {
      changeIsSelected(false);
      changeCategory("분류 전체");
    };
  }, []);

  return (
    <div className="board_selector relative lg:w-auto w-1/2">
      <button
        className="flex justify-between items-center lg:w-[10rem] w-full px-4 py-2 border border-solid border-[rgba(0,0,0,.35)] rounded-[0.25rem] hover:bg-black hover:border-none hover:text-white transition duration-1000"
        onClick={() => changeIsSelected(true)}
      >
        <span className="text-[1.01rem]">{category}</span>
        <FiChevronDown />
      </button>
      {isSelected && <BoardSelectAtom />}
    </div>
  );
}

export default observer(BoardSelector);
