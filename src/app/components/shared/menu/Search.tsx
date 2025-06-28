"use client";

import React from "react";

import { observer } from "mobx-react-lite";

import { GoSearch } from "react-icons/go";
import { IoMdClose } from "react-icons/io";

import HeaderStateStore from "@/app/store/HeaderStateStore";

function Search() {
  const { searchOpen, searchClose, isSearchOpen } = HeaderStateStore;

  return (
    <div className="search-icons flex items-center ml-[3rem]">
      <button
        className="w-[22px] h-[22px] cursor-pointer"
        onClick={() => {
          isSearchOpen ? searchClose() : searchOpen();
        }}
      >
        <span className="sr-only">
          {isSearchOpen ? "닫기 버튼" : "검색 버튼"}
        </span>
        {isSearchOpen ? <IoMdClose size={22} /> : <GoSearch size={22} />}
      </button>
    </div>
  );
}

export default observer(Search);
