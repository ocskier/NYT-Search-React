import React, { DetailedHTMLProps } from "react";

interface ColProps {
  size: string,
  children: React.ReactNode,
  style: Object
}

export const Col = ({ size,children,style}: ColProps & any) => (
  <div style={style} className={"col "+ size.split(" ").map((size: string) => size).join(" ")}>
    {children}
  </div>
);
