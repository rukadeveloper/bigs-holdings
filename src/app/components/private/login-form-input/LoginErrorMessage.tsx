import React from "react";

export default function LoginErrorMessage({ error }: { error: string }) {
  return (
    <div className="login-error-message mt-[1rem] text-[#aa2f2b]">{error}</div>
  );
}
