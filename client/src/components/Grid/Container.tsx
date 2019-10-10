import React from "react";

interface ContainerProps {
  fluid: boolean,
  children: React.ReactNode
}

export const Container = ({ fluid, children }: ContainerProps) => (
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);
