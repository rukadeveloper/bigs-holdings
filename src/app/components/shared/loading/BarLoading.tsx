import React from "react";

export default function TopLoading() {
  return (
    <div
      id="bar-loader"
      className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-[400]"
    >
      <img src="/gif/bar.gif" alt="bar-loader" width={100} />
    </div>
  );
}
