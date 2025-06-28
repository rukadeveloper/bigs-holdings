"use client";

import React, { useEffect } from "react";

import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";
import useLoadBoards from "@/app/hooks/useLoadBoards";
import BoardStore from "@/app/store/BoardStore";
import { observable, toJS } from "mobx";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import Link from "next/link";

type Board = {
  id: number;
  title: string;
  category: string;
  createdAt: string;
  isChecked: boolean;
};

function BoardTable() {
  useLoadBoards();

  const { boardData, changeCheckedOn, checkedOn, changeBoardData } = BoardStore;

  useEffect(() => {
    console.log(toJS(observable(boardData)));
  }, [boardData]);
  return (
    <RadioGroup>
      <div className="lg:block hidden w-full mb-[3rem]">
        <div className="w-full bg-[#F5FAFD] border-b border-solid border-[rgba(0,0,0,.15)]">
          <div className="w-full flex items-center h-[60px] ">
            <div className="w-[20%] text-center">분류</div>
            <div className="w-[50%] text-center">제목</div>
            <div className="w-[15%] text-center">글 번호</div>
            <div className="w-[15%] text-center">작성일</div>
          </div>
        </div>
        <div>
          {boardData.map((data: Board, idx: number) => (
            <div className="w-full relative" key={data.id}>
              <Link
                href={`/boards/${data.id}`}
                className="flex border-b  border-solid border-[rgba(0,0,0,.35)] cursor-pointer hover:bg-[#F3F5F7]"
              >
                <div className="px-4 w-[20%] py-4 text-center">
                  {data.category}
                </div>
                <div className="px-4 w-[50%] py-4 text-center">
                  {data.title}
                </div>
                <div className="px-4 w-[15%] py-4 text-center">{data.id}</div>
                <div className="px-4 w-[15%] py-4 text-center">
                  {data.createdAt.split("T")[0]}
                </div>
              </Link>
              <div className="px-4 py-4 absolute right-full top-0">
                <RadioGroupItem
                  id="check-delete"
                  checked={data.isChecked}
                  type="button"
                  value={`delete-check-${data.id}`}
                  onClick={() => {
                    const filtered = boardData.map((b: Board) => {
                      return b.id === data.id
                        ? { ...b, isChecked: true }
                        : { ...b, isChecked: false };
                    });
                    changeBoardData(filtered);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </RadioGroup>
  );
}

export default observer(BoardTable);
