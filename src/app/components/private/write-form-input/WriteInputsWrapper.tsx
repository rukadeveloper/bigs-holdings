import React from "react";

export default function WriteInputsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="write-inputs-group" className="flex flex-wrap gap-[80px]">
      {children}
    </div>
  );
}
