import React from "react";

interface JumbotronProps {
  children: React.ReactNode
}

const Jumbotron = ({ children }: JumbotronProps) => (
  <div
    style={{textAlign:"center",padding:"2rem 1rem",background:"silver"}}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;