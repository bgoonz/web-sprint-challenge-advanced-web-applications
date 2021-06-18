import React from "react";

const Color = (props) => {
  const { color, setEditColor,  deleteColor } = props;

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteColor(color);
  };

  const handleClick = (e) => {
    setEditColor(color);
  };

  return (
    <li data-testid="color" onClick={handleClick}>
      <span>
        <span className="delete" data-testid="delete" onClick={handleDelete}>
          x
        </span>
        {` ${color.color}`}
      </span>
      <div className="color-box" style={{ backgroundColor: color.code.hex }} />
    </li>
  );
};

export default Color;
