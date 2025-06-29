"use client";

import React, { Dispatch, SetStateAction } from "react";

import { IoClose } from "react-icons/io5";
import PatchInput from "./PatchInput";
import PatchSelector from "./PatchSelector";
import { Button } from "../../ui/button";
import WriteStateStore from "@/app/store/WriteStateStore";
import { observer } from "mobx-react-lite";
import BoardStore from "@/app/store/BoardStore";
import useLoadDetails from "@/app/hooks/useLoadDetails";
import CategoryStore from "@/app/store/CategoryStore";

function PatchPopOver({
  setPatchOn,
}: {
  setPatchOn: Dispatch<SetStateAction<boolean>>;
}) {
  const { boardData, allFilteredData } = BoardStore;

  const { category } = CategoryStore;

  const checkIds =
    category === "전체 분류"
      ? boardData.filter((item) => {
          return item.isChecked ? item.id : null;
        })
      : allFilteredData.filter((item) => {
          return item.isChecked ? item.id : null;
        });

  const { data, setData } = useLoadDetails(checkIds[0].id);

  const changeTitle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => ({ ...prev, title: e.target.value }));
  };

  const changeContent = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => ({ ...prev, content: e.target.value }));
  };

  return (
    <div
      id="patch-pop-over"
      className="fixed inset-0 mx-auto my-auto z-[100] bg-white rounded-[0.25rem] p-[1.4rem]"
      style={{ width: "400px", height: "750px" }}
    >
      <h2 className="text-xl font-bold">수정하기</h2>
      <button
        className="close absolute top-[1.4rem] right-[1.4rem] cursor-pointer"
        onClick={() => {
          setPatchOn(false);
          document.body.classList.remove("dimmed");
        }}
      >
        <span className="sr-only">닫기 버튼</span>
        <IoClose size={26} />
      </button>
      <span className="text-[0.9rem] pt-[1.1rem] inline-block">
        다음 사항을 잘 읽어보시고, 원하는 내용대로 수정해주세요.
      </span>
      <PatchSelector value={data.boardCategory} setData={setData} />
      <PatchInput label={"글 제목"} value={data.title} change={changeTitle} />
      <PatchInput
        label={"글 내용"}
        value={data.content}
        change={changeContent}
      />
      <div className="button-wrapper w-full">
        <Button className="mx-auto w-[100px] block mt-[2rem]">수정하기</Button>
      </div>
    </div>
  );
}

export default observer(PatchPopOver);
