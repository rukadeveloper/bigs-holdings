import React from "react";

export default function SearchInner({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="search-inner" className="max-w-[40.25rem] mx-auto py-[5.25rem]">
      {children}
    </div>
  );
}
