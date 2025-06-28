import React from "react";
import { GoSearch } from "react-icons/go";

export default function MobileSearch() {
  return (
    <button>
      <span className="sr-only">모바일 탐색 버튼</span>
      <GoSearch size={24} fill={"#fff"} />
    </button>
  );
}
