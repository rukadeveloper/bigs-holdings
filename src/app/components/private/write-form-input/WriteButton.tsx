"use client";

import React from "react";

import { observer } from "mobx-react-lite";
import WriteStateStore from "@/app/store/WriteStateStore";

function WriteButton() {
  const { categories, content, title } = WriteStateStore;

  return (
    <div className="write-button-wrapper w-full">
      <button
        className="w-[250px] block mx-auto sm:mb-[2rem] mb-[5rem] sm:py-[2rem] py-[0.9rem] bg-[#1D31D9] text-white text-[1.2rem] font-bold disabled:opacity-20"
        disabled={categories === "선택하기" || !content || !title}
      >
        글 작성하기
      </button>
    </div>
  );
}

export default observer(WriteButton);
