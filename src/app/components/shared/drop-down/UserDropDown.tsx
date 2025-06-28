import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "../../ui/dropdown-menu";

export default function UserDropDown({
  goWrite,
  goBoard,
  userEmail,
}: {
  goWrite: () => void;
  goBoard: () => void;
  userEmail: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-bold text-[1.2rem] ml-5 cursor-pointer">
        고객 메뉴
      </DropdownMenuTrigger>
      <DropdownMenuContent className="overflow-y-auto">
        <DropdownMenuLabel>{userEmail} 님</DropdownMenuLabel>
        <DropdownMenuItem onClick={goWrite} className="cursor-pointer">
          글쓰기
        </DropdownMenuItem>
        <DropdownMenuItem onClick={goBoard} className="cursor-pointer">
          게시판 가기
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
