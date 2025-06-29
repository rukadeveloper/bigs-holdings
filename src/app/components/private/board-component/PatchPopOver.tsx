"use client";

import React, { Dispatch, SetStateAction, useEffect } from "react";

import { IoClose } from "react-icons/io5";
import PatchInput from "./PatchInput";
import PatchSelector from "./PatchSelector";
import { Button } from "../../ui/button";
import { observer } from "mobx-react-lite";
import BoardStore from "@/app/store/BoardStore";
import useLoadDetails from "@/app/hooks/useLoadDetails";
import CategoryStore from "@/app/store/CategoryStore";
import axios from "axios";
import { observable, toJS } from "mobx";
import { useLoading } from "@/app/context/LoadingContext";
import WriteStateStore from "@/app/store/WriteStateStore";

type Board = {
  id: number;
  title: string;
  category: string;
  createdAt: string;
  isChecked: boolean;
};

function PatchPopOver({
  setPatchOn,
}: {
  setPatchOn: Dispatch<SetStateAction<boolean>>;
}) {
  const {
    boardData,
    allFilteredData,
    changeBoardOn,
    changeBoardAllOpen,
    changePatchOccur,
  } = BoardStore;
  const { openLoading } = useLoading();
  const { setTitle, setContent, setCategory, categories } = WriteStateStore;

  const { category } = CategoryStore;

  const checkIds =
    category === "분류 전체"
      ? boardData.filter((item) => {
          return item.isChecked ? item.id : null;
        })
      : allFilteredData.filter((item) => {
          return item.isChecked ? item.id : null;
        });

  useEffect(() => {
    console.log(category);
  }, [category]);

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

  const boardsToDeleteOrPatch1 = boardData.filter((b: Board) => b.isChecked);
  const boardsToDeleteOrPatch2 = allFilteredData.filter(
    (b: Board) => b.isChecked
  );

  const patchBoard = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const imported = sessionStorage.getItem("my-account");
    let parsed = null;

    if (imported) {
      parsed = JSON.parse(imported);
    }

    if (category === "분류 전체") {
      const formData = new FormData();

      formData.append(
        "request",
        new Blob(
          [
            JSON.stringify({
              title: data.title,
              content: data.content,
              category: data.boardCategory,
            }),
          ],
          {
            type: "application/json",
          }
        )
      );

      const patch1 = boardsToDeleteOrPatch1.map((b: Board) =>
        axios.patch(
          `https://front-mission.bigs.or.kr/boards/${b.id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${parsed.accessToken}`,
            },
          }
        )
      );

      try {
        const res3 = await Promise.all(patch1);
        console.log(res3);
      } catch (e) {
      } finally {
        changeBoardOn(true);
        changeBoardAllOpen(false);
      }
    } else {
      const formData = new FormData();

      formData.append(
        "request",
        new Blob(
          [
            JSON.stringify({
              title: data.title,
              content: data.content,
              category: data.boardCategory,
            }),
          ],
          {
            type: "application/json",
          }
        )
      );

      const patch2 = boardsToDeleteOrPatch2.map((b: Board) =>
        axios.patch(
          `https://front-mission.bigs.or.kr/boards/${b.id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${parsed.accessToken}`,
            },
          }
        )
      );

      try {
        const res4 = await Promise.all(patch2);
        console.log(res4);
      } catch (e) {
      } finally {
        changeBoardAllOpen(true);
        changeBoardOn(false);
      }
    }

    setPatchOn(false);
    document.body.classList.remove("dimmed");

    openLoading();
    document.body.classList.add("whiteDim");
    changePatchOccur(true);

    setTitle(data.title);
    setCategory(data.boardCategory);
    setContent(data.content);
  };

  return (
    <div
      id="patch-pop-over"
      className="fixed inset-0 mx-auto my-auto z-[100] bg-white rounded-[0.25rem] p-[1.4rem]"
      style={{ width: "400px", height: "750px" }}
    >
      <form onSubmit={patchBoard}>
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
          <Button className="mx-auto w-[100px] block mt-[2rem]">
            수정하기
          </Button>
        </div>
      </form>
    </div>
  );
}

export default observer(PatchPopOver);
