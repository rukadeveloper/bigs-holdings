"use client";

import BoardInfoHeader from "@/app/components/private/board-component/BoardInfoHeader";
import BoardPagination from "@/app/components/private/board-component/BoardPagination";
import BoardPatch from "@/app/components/private/board-component/BoardPatch";
import BoardTable from "@/app/components/private/board-component/BoardTable";
import MobileTable from "@/app/components/private/board-component/MobileTable";
import React from "react";

export default function page() {
  return (
    <>
      <BoardInfoHeader />
      <BoardTable />
      <MobileTable />
      <BoardPagination />
      <BoardPatch />
    </>
  );
}
