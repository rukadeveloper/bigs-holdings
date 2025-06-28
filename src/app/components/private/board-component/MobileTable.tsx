import React from "react";

import BoardStore from "@/app/store/BoardStore";
import Link from "next/link";
import { BsCalendar2DateFill } from "react-icons/bs";
import { TbCircleNumber0Filled } from "react-icons/tb";

type Board = {
  id: number;
  title: string;
  category: string;
  createdAt: string;
};

export default function MobileTable() {
  const { boardData } = BoardStore;

  return (
    <div className="mobile-table lg:hidden block">
      <ul className="border-t border-solid border-[rgba(0,0,0,.35)] mb-[2rem]">
        {boardData?.map((bo: Board) => (
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
          </li>
        ))}
      </ul>
    </div>
  );
}
