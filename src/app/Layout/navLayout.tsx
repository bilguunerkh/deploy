import React from "react";

const NavLayout = ({ children }: any) => {
  return (
    <div className="container mx-auto p-20">
      <div className="text-white flex"></div>
      {children}
    </div>
  );
};

export default NavLayout;
