import React from "react";

export default function SharedPageInner({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="inner xl:max-w-[1200px] max-w-[90%] mx-auto mt-[6rem]">
      {children}
    </div>
  );
}
