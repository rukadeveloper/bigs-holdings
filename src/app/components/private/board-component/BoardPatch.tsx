import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import BoardStore from "@/app/store/BoardStore";
import axios from "axios";
import { observer } from "mobx-react-lite";

type Board = {
  id: number;
  title: string;
  category: string;
  createdAt: string;
  isChecked: boolean;
};

function BoardPatch() {
  const { boardData } = BoardStore;

  const isAnyChecked = boardData.some((item) => item.isChecked);

  return (
    <div
      id="board-patch-wrapper"
      className="flex items-center justify-center gap-[2rem] w-full mb-[3rem]"
    >
      <button className="w-[160px] py-4 bg-black text-white pt-[1.4rem] text-[1.2rem] font-bold cursor-pointer">
        수정하기
      </button>
      <button
        className="w-[160px] py-4 bg-black text-white pt-[1.4rem] text-[1.2rem] font-bold cursor-pointer disabled:opacity-20"
        disabled={!isAnyChecked}
      >
        삭제하기
      </button>
    </div>
  );
}

export default observer(BoardPatch);
