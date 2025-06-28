import React from "react";

export default function LocalIntro({
  name,
  details,
}: {
  name: string;
  details: string;
}) {
  return (
    <div className="local-intro">
      <h2 className="text-3xl font-bold pb-[2rem]">{name}</h2>
      <span className="text-[rgba(0,0,0,.85)]">{details}</span>
    </div>
  );
}
