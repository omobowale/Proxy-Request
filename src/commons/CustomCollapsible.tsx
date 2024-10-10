import React, { ReactNode, useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

function CustomCollapsible({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="">
      <div
        onClick={() => setCollapsed(!collapsed)}
        className="cursor-pointer flex justify-between text-left py-2 px-6 text-[15px] shadow-[0_5px_10px_rgba(0,0,0,0.3)] rounded-t-md"
      >
        <span>{title}</span>
        <span className="text-[24px]">
          {!collapsed && <RiArrowUpSLine />}
          {collapsed && <RiArrowDownSLine />}
        </span>
      </div>
      {!collapsed && (
        <div className="bg-whitesmoke border-t-0 px-2 py-0">{children}</div>
      )}
    </div>
  );
}

export default CustomCollapsible;
