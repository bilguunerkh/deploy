import React from "react";

const Main = () => {
  return (
    <div className="">
      <h1
        style={{ fontSize: "40px" }}
        className="font-normal tracking-tighter text-black"
      >
        On June 1, 2024, let's once again offer our support
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-2">
        <div className="border border-black h-40"></div>
        <div className="border border-black h-40"></div>
        <div className="border border-black h-40"></div>
      </div>
    </div>
  );
};

export default Main;
