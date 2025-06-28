import React from "react";
import { GoSearch } from "react-icons/go";

export default function SearchInput() {
  return (
    <div className="search-input mt-[2rem] w-full border-b border-solid border-[rgba(0,0,0,.45)] relative">
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        className="w-full py-[1rem] outline-none"
      />
      <button
        type="submit"
        className="w-[22px] h-[22px] absolute right-0 top-0 bottom-0 my-auto mx-0 cursor-pointer"
      >
        <span className="sr-only">검색어 제출</span>
        <GoSearch size={22} />
      </button>
    </div>
  );
}
