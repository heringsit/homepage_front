import React, { useContext } from "react";
import { MediaQueryContext } from "../../context";
export default function Loading() {
  const { mTablet } = useContext(MediaQueryContext);

  return (
    <div
      style={{ position: "relative", top: mTablet ? "" : "-184px" }}
      className="w-screen flex justify-center align-items-center"
    >
      <div className=" loader" />
    </div>
  );
}
