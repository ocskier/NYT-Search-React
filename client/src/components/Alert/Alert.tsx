import React from "react";

interface AlertProps {
  type: string,
  style: Object,
  children: React.ReactNode
}

const Alert = (props: AlertProps) => (
  <div
    role="alert"
    className={`alert alert-${props.type} fade in`}
    style={{ width: "80%", margin: "0 auto", marginTop: 18, ...props.style }}
  >
    {props.children}
  </div>
);

export default Alert;
