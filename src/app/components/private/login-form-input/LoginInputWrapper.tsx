"use client";

import React from "react";
import { observer } from "mobx-react-lite";
import LoginErrorMessage from "./LoginErrorMessage";

function LoginInputWrapper({
  type,
  placeholder,
  label,
  change,
  blur,
  value,
  valid,
  error,
  touched,
}: {
  type: string;
  placeholder: string;
  label: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  blur: () => void;
  value: string;
  valid: boolean;
  error: string;
  touched: boolean;
}) {
  return (
    <div className="login-input-wrapper sm:max-w-[600px] xxsm:max-w-[400px] max-w-[300px] mx-auto mb-[1.1rem]">
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-[0.75rem] py-[1.15rem] outline-none border border-solid ${
          !valid && touched && error
            ? "border-[#aa2f2b]"
            : "border-[rgba(0,0,0,.25)]"
        } rounded-[0.25rem]`}
        onChange={change}
        onBlur={blur}
        value={value}
      />
      {!valid && touched && error && <LoginErrorMessage error={error} />}
    </div>
  );
}

export default observer(LoginInputWrapper);
