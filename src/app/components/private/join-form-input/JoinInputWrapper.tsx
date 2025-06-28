import React from "react";
import JoinEmailInput from "./JoinEmailInput";
import JoinErrorMessage from "./JoinErrorMessage";

export default function JoinInputWrapper({
  type,
  isMust,
  label,
  placeholder,
  change,
  blur,
  value,
  valid,
  error,
  touched,
}: {
  type: string;
  isMust: boolean;
  label: string;
  placeholder: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  blur: () => void;
  value: string;
  valid: boolean;
  error: string;
  touched: boolean;
}) {
  return (
    <div
      className={`join__input__wrapper w-full flex ssm:flex-row flex-col relative pb-[3.23rem]`}
    >
      <div className="font-bold text-[1.05rem] inline-flex w-[200px] items-center flex-row-reverse justify-end">
        {isMust && <b className="text-[#aa2f2b]">*</b>}
        {label}
      </div>
      {label !== "아이디" ? (
        <input
          type={type}
          placeholder={placeholder}
          className={`flex-1 py-[0.995rem] border-b border-solid ${
            !valid && error && touched
              ? "border-[#aa2e29]"
              : "border-[rgba(0,0,0,.45)]"
          } outline-none`}
          onChange={change}
          onBlur={blur}
          value={value}
        />
      ) : (
        <JoinEmailInput
          type={type}
          changeOne={change}
          blurOne={blur}
          valueOne={value}
          errorOne={error}
          validOne={valid}
          touchedOne={touched}
        />
      )}
      {error && !valid && touched && <JoinErrorMessage error={error} />}
    </div>
  );
}
