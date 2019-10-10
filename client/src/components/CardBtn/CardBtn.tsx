import React from "react";
import "./CardBtn.css";

interface CardBtnProps {
  onClick: () => void;
}

const CardBtn = (props: CardBtnProps) => (
  <button
    onClick={props.onClick}
    // className={`card-btn ${props["data-value"]}`}
    {...props}
  />
);

export default CardBtn;
