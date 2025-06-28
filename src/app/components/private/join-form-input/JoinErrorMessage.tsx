import React from "react";

export default function JoinErrorMessage({ error }: { error: string }) {
  return (
    <div className="error-message absolute bottom-[1.83rem] translate-y-full font-bold text-[#AA2E29]">
      {error}
    </div>
  );
}
