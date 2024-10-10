import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="bg-blue text-white py-4">Header</div>
      <div className="flex gap-10">
        <div className="w-2/3">
          <img src="/assets/login-hero.png" alt="" />
        </div>
        <div className="w-[80%] px-10">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
