"use client";

import { useLoading } from "@/app/context/LoadingContext";
import AccountStateStore from "@/app/store/AccountStateStore";
import HeaderStateStore from "@/app/store/HeaderStateStore";
import { useRouter } from "next/navigation";
import React from "react";
import MobileDropdown from "./MobileDropdown";

export default function MobileInfo() {
  const router = useRouter();
  const { openLoading, closeLoading } = useLoading();

  const { isAuth, userEmail, logout } = AccountStateStore;
  const { mobileMenuToggle } = HeaderStateStore;

  const goLogin = () => {
    router.push("/login");
    openLoading();
    document.body.classList.add("whiteDim");
    mobileMenuToggle();
  };

  const goWrite = () => {
    router.push("/write");
    document.body.classList.add("whiteDim");
    mobileMenuToggle();
  };

  const goBoard = () => {
    router.push("/boards");
    document.body.classList.add("whiteDim");
    mobileMenuToggle();
  };

  const goLogout = () => {
    logout();
    document.body.classList.add("whiteDim");
    openLoading();
    setTimeout(() => {
      closeLoading();
      document.body.classList.remove("whiteDim");
    }, 3000);
    mobileMenuToggle();
  };

  return (
    <div className="mobile-info flex items-center gap-[10px]">
      {!isAuth && (
        <button
          className="text-white font-bold text-xl pt-[2px] cursor-pointer"
          onClick={goLogin}
        >
          로그인
        </button>
      )}
      {isAuth && (
        <>
          <button
            className="text-white font-bold text-xl pt-[2px] px-[1rem]"
            onClick={goLogout}
          >
            로그아웃
          </button>
          <MobileDropdown goWrite={goWrite} goBoard={goBoard} />
        </>
      )}
    </div>
  );
}
