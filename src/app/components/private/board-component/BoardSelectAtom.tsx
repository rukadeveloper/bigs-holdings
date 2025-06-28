"use client";

import React, { Dispatch, SetStateAction } from "react";

import useLoadCategory from "@/app/hooks/useLoadCategory";
import CategoryStore from "@/app/store/CategoryStore";
import { observer } from "mobx-react-lite";

function BoardSelectAtom() {
  const categories = useLoadCategory();

  const { changeCategory, changeIsSelected } = CategoryStore;

  return (
    <ul className="absolute top-[calc(100%_+_3px)] left-0 right-0 flex flex-col bg-white rounded-[0.25rem] border border-solid border-[rgba(0,0,0,.25)]">
      {Object.entries(categories).map(([key, value]) => (
        <button
          key={key}
          className="py-4 px-3 text-left hover:bg-black hover:text-white"
          onClick={() => {
            changeCategory(key);
            changeIsSelected(false);
          }}
        >
          {value}
        </button>
      ))}
    </ul>
  );
}

export default observer(BoardSelectAtom);
