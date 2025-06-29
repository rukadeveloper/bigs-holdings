import React, { useState } from "react";
import ReactDOM from "react-dom";
import BoardStore from "@/app/store/BoardStore";
import axios from "axios";
import { observer } from "mobx-react-lite";
import useLoadBoards from "@/app/hooks/useLoadBoards";
import { Button } from "../../ui/button";
import PatchPopOver from "./PatchPopOver";
import CategoryStore from "@/app/store/CategoryStore";
import useLoadAllBoards from "@/app/hooks/useLoadAllBoards";

type Board = {
  id: number;
  title: string;
  category: string;
  createdAt: string;
  isChecked: boolean;
};

function BoardPatch() {
  const {
    boardData,
    allFilteredData,
    changeBoardData,
    changeFilteredBoardData,
    changeTotalElements,
    changeAllFilteredData,
    changePatchOccur,
    changeDeleteOccur,
    totalElements,
  } = BoardStore;

  const { category } = CategoryStore;

  const isAnyChecked =
    (category === "분류 전체" && boardData.some((item) => item.isChecked)) ||
    (category !== "분류 전체" &&
      allFilteredData.some((item) => item.isChecked));

  // 1. Checked 된 Boards 가져오기
  const boardsToDeleteOrPatch1 = boardData.filter((b: Board) => b.isChecked);
  const boardsToDeleteOrPatch2 = allFilteredData.filter(
    (b: Board) => b.isChecked
  );

  const deletes = async () => {
    const imported = sessionStorage.getItem("my-account");
    let parsed = null;

    if (imported) {
      parsed = JSON.parse(imported);
    }

    // 2. 삭제 Promise 생성
    const deletePromise1 = boardsToDeleteOrPatch1.map((b: Board) => {
      axios.delete(`https://front-mission.bigs.or.kr/boards/${b.id}`, {
        headers: { Authorization: `Bearer ${parsed.accessToken}` },
      });
    });

    const deletePromise2 = boardsToDeleteOrPatch2.map((b: Board) => {
      axios.delete(`https://front-mission.bigs.or.kr/boards/${b.id}`, {
        headers: { Authorization: `Bearer ${parsed.accessToken}` },
      });
    });

    try {
      if (category === "분류 전체") {
        const res1 = await Promise.all(deletePromise1);

        // update UI
        const remainingData1 = boardData.filter((b) => !b.isChecked);

        changeBoardData(remainingData1);
        changeFilteredBoardData(remainingData1);
        changeTotalElements(remainingData1.length);
      } else {
        const res2 = await Promise.all(deletePromise2);
        console.log(res2);
        const remainingData2 = allFilteredData.filter((b) => !b.isChecked);
        changeAllFilteredData(remainingData2);
        changeTotalElements(remainingData2.length);
      }

      changeDeleteOccur(true);
    } catch (e) {}
  };

  const [patchOn, setPatchOn] = useState(false);

  return (
    <div
      id="board-patch-wrapper"
      className="flex items-center justify-center gap-[2rem] w-full mb-[3rem]"
    >
      <Button
        className="w-[160px] h-full py-4 bg-black text-white pt-[1.4rem] text-[1.2rem] font-bold cursor-pointer disabled:opacity-20"
        disabled={!isAnyChecked}
        onClick={() => {
          setPatchOn(true);
          document.body.classList.add("dimmed");
        }}
      >
        수정하기
      </Button>
      {patchOn &&
        ReactDOM.createPortal(
          <PatchPopOver setPatchOn={setPatchOn} />,
          document.body
        )}
      <Button
        className="w-[160px] h-full py-4 bg-black text-white pt-[1.4rem] text-[1.2rem] font-bold cursor-pointer disabled:opacity-20"
        disabled={!isAnyChecked}
        onClick={deletes}
      >
        삭제하기
      </Button>
    </div>
  );
}

export default observer(BoardPatch);
