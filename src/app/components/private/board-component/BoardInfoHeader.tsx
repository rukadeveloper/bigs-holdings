import React from "react";
import BoardSort from "./BoardSort";
import BoardStore from "@/app/store/BoardStore";
import useLoadBoards from "@/app/hooks/useLoadBoards";
import { observer } from "mobx-react-lite";

function BoardInfoHeader() {
  const { boardData, totalElements } = BoardStore;

  useLoadBoards();

  return (
    <div className="board-info-header flex lg:flex-row flex-col lg:gap-0 gap-6 justify-between items-center mt-[3.35rem] pb-[1.25rem] lg:border-b-2 border-none border-solid border-black">
      <span className="text-[#3C99E8]">총 {totalElements} 개</span>
      <BoardSort />
    </div>
  );
}

export default observer(BoardInfoHeader);
