import React from "react";

interface RowProps {
  fluid: boolean,
  children: React.ReactNode
}

export const Row = ({ fluid, children }: RowProps) => (
  <div className={`row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);
