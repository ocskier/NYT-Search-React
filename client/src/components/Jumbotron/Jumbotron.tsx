import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{textAlign:"center",padding:"2rem 1rem",background:"silver"}}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;