"use client";

import useLoaded from "@/app/hooks/useLoaded";
import AccountStateStore from "@/app/store/AccountStateStore";
import LoginStateStore from "@/app/store/LoginStateStore";
import { observer } from "mobx-react-lite";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function RedirectComp() {
  const { isAuth } = AccountStateStore;
  const { alertOpen } = LoginStateStore;
  const pathname = usePathname();
  const router = useRouter();

  useLoaded();

  useEffect(() => {
    if (
      isAuth &&
      !alertOpen &&
      (pathname === "/login" || pathname === "/join")
    ) {
      router.replace("/");
    }
  }, [isAuth, alertOpen, pathname]);

  return <></>;
}

export default observer(RedirectComp);
