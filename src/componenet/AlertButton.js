import React from "react";

const AlertButton = ({ messages, children }) => {
  const handleClick = () => {
    alert(messages);
  };
  return <button onClick={handleClick}> {children} </button>;
};

export default AlertButton;
