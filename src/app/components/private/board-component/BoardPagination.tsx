import React, { useEffect } from "react";

import useLoadBoards from "@/app/hooks/useLoadBoards";
import BoardStore from "@/app/store/BoardStore";
import { observer } from "mobx-react-lite";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useLoading } from "@/app/context/LoadingContext";

function BoardPagination() {
  const { page, totalPages, changePage } = BoardStore;

  const { openLoading } = useLoading();

  return (
    <ul
      id="pagination"
      className="w-full flex items-center justify-center mb-[2rem]"
    >
      <button
        className="mr-[2rem] disabled:opacity-20 cursor-pointer"
        disabled={page === 0}
        onClick={() => {
          changePage(page! - 1);
        }}
      >
        <span className="sr-only">이전 버튼</span>
        <FaChevronLeft fill={"#3c99e8"} />
      </button>
      {totalPages &&
        [...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            className={`px-3 opacity-40 cursor-pointer ${
              page === idx ? "text-[#3C99E8] opacity-100" : ""
            } `}
            onClick={() => {
              openLoading();
              document.body.classList.add("whiteDim");
              changePage(idx);
            }}
          >
            {idx + 1}
          </button>
        ))}
      <button
        className="ml-[2rem] disabled:opacity-20 cursor-pointer"
        onClick={() => {
          changePage(page! + 1);
        }}
        disabled={page === totalPages! - 1}
      >
        <span className="sr-only">이후 버튼</span>
        <FaChevronRight fill={"#3c99e8"} />
      </button>
    </ul>
  );
}

export default observer(BoardPagination);
