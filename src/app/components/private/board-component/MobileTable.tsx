import React from "react";

import BoardStore from "@/app/store/BoardStore";
import Link from "next/link";
import { BsCalendar2DateFill } from "react-icons/bs";
import { TbCircleNumber0Filled } from "react-icons/tb";
import { observer } from "mobx-react-lite";
import CategoryStore from "@/app/store/CategoryStore";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";

type Board = {
  id: number;
  title: string;
  category: string;
  createdAt: string;
  isChecked: boolean;
};

function MobileTable() {
  const { boardData, allFilteredData, changeBoardData } = BoardStore;

  const { category } = CategoryStore;

  return (
    <RadioGroup>
      <div className="mobile-table lg:hidden block">
        <ul className="border-t border-solid border-[rgba(0,0,0,.35)] mb-[2rem]">
          {category === "분류 전체"
            ? boardData?.map((bo: Board) => (
                <li
                  key={bo.id}
                  className="border-b border-solid border-[rgba(0,0,0,.35)] relative"
                >
                  <Link
                    href={`/boards/${bo.id}`}
                    className="block px-4 py-3 group hover:bg-black"
                  >
                    <span className="group-hover:text-white">
                      <b className="text-[#E23631] font-normal pr-3">
                        [{bo.category}]
                      </b>
                      {bo.title}
                    </span>
                    <div
                      id="wrapped"
                      className="mt-[1rem] flex items-center gap-[3rem]"
                    >
                      <div
                        id="date"
                        className="flex items-center gap-[1rem] group-hover:text-white"
                      >
                        <BsCalendar2DateFill size={12} />
                        {bo.createdAt.split("T")[0]}
                      </div>
                      <div
                        id="number"
                        className="flex items-center gap-[1rem] group-hover:text-white"
                      >
                        <TbCircleNumber0Filled size={18} />
                        {bo.id}
                      </div>
                    </div>
                  </Link>
                  <div className="px-4 py-4 absolute right-0 top-0 bottom-0 my-auto mx-0 flex items-center">
                    <RadioGroupItem
                      id="check-delete"
                      checked={bo.isChecked}
                      type="button"
                      value={`delete-check-${bo.id}`}
                      onClick={() => {
                        const filtered = boardData.map((b: Board) => {
                          return b.id === bo.id
                            ? { ...b, isChecked: true }
                            : { ...b, isChecked: false };
                        });
                        changeBoardData(filtered);
                      }}
                    />
                  </div>
                </li>
              ))
            : allFilteredData?.map((bo: Board) => (
                <li
                  key={bo.id}
                  className="border-b border-solid border-[rgba(0,0,0,.35)]"
                >
                  <Link
                    href={`/boards/${bo.id}`}
                    className="block px-4 py-3 group hover:bg-black"
                  >
                    <span className="group-hover:text-white">
                      <b className="text-[#E23631] font-normal pr-3">
                        [{bo.category}]
                      </b>
                      {bo.title}
                    </span>
                    <div
                      id="wrapped"
                      className="mt-[1rem] flex items-center gap-[3rem]"
                    >
                      <div
                        id="date"
                        className="flex items-center gap-[1rem] group-hover:text-white"
                      >
                        <BsCalendar2DateFill size={12} />
                        {bo.createdAt.split("T")[0]}
                      </div>
                      <div
                        id="number"
                        className="flex items-center gap-[1rem] group-hover:text-white"
                      >
                        <TbCircleNumber0Filled size={18} />
                        {bo.id}
                      </div>
                    </div>
                  </Link>
                  <div className="px-4 py-4 absolute right-full top-0">
                    <RadioGroupItem
                      id="check-delete"
                      checked={bo.isChecked}
                      type="button"
                      value={`delete-check-${bo.id}`}
                      onClick={() => {
                        const filtered = boardData.map((b: Board) => {
                          return b.id === bo.id
                            ? { ...b, isChecked: true }
                            : { ...b, isChecked: false };
                        });
                        changeBoardData(filtered);
                      }}
                    />
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </RadioGroup>
  );
}

export default observer(MobileTable);
