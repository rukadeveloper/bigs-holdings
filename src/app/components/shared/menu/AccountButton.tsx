"use client";

import React, { useState, useEffect } from "react";

import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";

import { useLoading } from "@/app/context/LoadingContext";

import AccountStateStore from "@/app/store/AccountStateStore";
import useCheckLogin from "@/app/hooks/useCheckLogin";

import UserDropDown from "../drop-down/UserDropDown";

function AccountButton() {
  const [client, setClient] = useState(false);

  const router = useRouter();

  const { isAuth, userEmail, logout } = AccountStateStore;

  useEffect(() => {
    setClient(true);
  }, []);

  const { openLoading } = useLoading();

  useCheckLogin();

  const goLogin = () => {
    openLoading();
    document.body.classList.add("whiteDim");
    router.push("/login");
  };

  const goWrite = () => {
    openLoading();
    document.body.classList.add("whiteDim");
    router.push("/write");
  };

  const goBoard = () => {
    openLoading();
    document.body.classList.add("whiteDim");
    router.push("/boards");
  };

  const logouts = () => {
    openLoading();
    document.body.classList.add("whiteDim");
    setTimeout(() => {
      logout();
    }, 2000);
  };

  return client ? (
    <div id="account">
      {!isAuth && (
        <button
          className="font-bold text-xl ml-[2rem] cursor-pointer"
          onClick={goLogin}
        >
          로그인
        </button>
      )}
      {isAuth && (
        <button
          className="font-bold text-xl ml-[2rem] cursor-pointer"
          onClick={logouts}
        >
          로그아웃
        </button>
      )}
      {isAuth && (
        <UserDropDown
          goWrite={goWrite}
          goBoard={goBoard}
          userEmail={userEmail}
        />
      )}
    </div>
  ) : (
    <div id="account">
      <div className="font-bold text-xl ml-[2rem] cursor-pointer opacity-20">
        로딩 중..
      </div>
    </div>
  );
}

export default observer(AccountButton);
