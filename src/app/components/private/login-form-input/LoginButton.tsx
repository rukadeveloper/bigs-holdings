"use client";

import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import LoginStateStore from "@/app/store/LoginStateStore";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../ui/alert-dialog";
import { useLoading } from "@/app/context/LoadingContext";
import { useRouter } from "next/navigation";

function LoginButton() {
  const {
    idValid,
    idTouched,
    passValid,
    passTouched,
    changeAlertOpen,
    changeSuccessMessage,
    changeFailedMessage,
    successMessage,
    failedMessage,
    alertOpen,
    messageLoading,
  } = LoginStateStore;

  const router = useRouter();

  const { openLoading } = useLoading();

  useEffect(() => {
    if (messageLoading) {
      openLoading();
      document.body.classList.add("whiteDim");
    }
  }, [messageLoading]);

  return (
    <AlertDialog
      open={alertOpen}
      onOpenChange={(open) => changeAlertOpen(open)}
    >
      <div className="login__button sm:max-w-[600px] xxsm:max-w-[400px] max-w-[300px] mx-auto">
        <AlertDialogTrigger
          className="w-full block py-[1.275rem] bg-[#2D50C7] text-white text-[1.35rem] rounded-[0.25rem] cursor-pointer disabled:opacity-20"
          disabled={!idValid || !idTouched || !passValid || !passTouched}
          type="submit"
        >
          로그인
        </AlertDialogTrigger>
      </div>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>메시지</AlertDialogTitle>
          <AlertDialogDescription>
            {!messageLoading && successMessage !== "" && successMessage}
            {!messageLoading && failedMessage !== "" && failedMessage}
            {messageLoading && "로딩 중"}
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => {
                changeAlertOpen(false);
                if (successMessage !== "") {
                  changeSuccessMessage("");
                  router.replace("/");
                }
                if (failedMessage !== "") changeFailedMessage("");

                document.body.classList.add("whiteDim");
                openLoading();
              }}
            >
              확인
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default observer(LoginButton);
