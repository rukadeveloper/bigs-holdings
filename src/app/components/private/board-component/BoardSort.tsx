import React from "react";
import BoardSelector from "./BoardSelector";

export default function BoardSort() {
  return (
    <div className="sort-wrapper lg:w-auto w-full flex items-center gap-[1rem]">
      <BoardSelector />
    </div>
  );
}
