import React, { useState } from "react";
import "./style.css";

const PlusButton = ({ style, onClick }) => {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    setCount(count + 1);
  };

  return (
    <div>
      <button style={style} onClick={handleClick}>
        +
      </button>
    </div>
  );
};

export default PlusButton;
