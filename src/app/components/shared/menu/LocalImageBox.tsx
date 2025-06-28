import React from "react";

import Image from "next/image";

export default function LocalImageBox({ img }: { img: string }) {
  return (
    <div className="local-imgBx xxl:w-[21.5rem] w-[13.5rem] xxl:h-[13.5rem] h-[9.75rem] rounded-[1rem] overflow-hidden relative">
      <Image
        src={img}
        alt="menu_images"
        fill
        className="w-full h-full object-cover"
      />
    </div>
  );
}
