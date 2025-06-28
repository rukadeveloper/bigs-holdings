import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import AccountStateStore from "@/app/store/AccountStateStore";

export default function MobileDropdown({
  goWrite,
  goBoard,
}: {
  goWrite: () => void;
  goBoard: () => void;
}) {
  const { userEmail } = AccountStateStore;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white font-bold text-xl pt-[2px] px-[1rem] cursor-pointer">
        메뉴 열기
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{userEmail}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={goWrite}>글쓰러 가기</DropdownMenuItem>
        <DropdownMenuItem onClick={goBoard}>게시판 이동</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
