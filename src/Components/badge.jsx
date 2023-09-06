import React from "react";

const BadgeTag = ({ children }) => {
  return (
    <div className=" flex justify-center text-sm p-1 bg-cyan-50 text-cyan-400 font-semibold rounded border border-cyan-400">
      {children}
    </div>
  );
};

export default BadgeTag;
