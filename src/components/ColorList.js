import React, { useState } from "react";

import Color from "./Color";
import EditMenu from "./EditMenu";

const ColorList = (props) => {
  const { colors, editing, toggleEdit, saveEdit, deleteColor } = props;
  const [editColor, setEditColor] = useState({ color: "", code: { hex: "" } });

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors &&
          colors.length > 0 &&
          colors.map((color) => (
            <Color
              key={color.id}
              setEditColor={setEditColor}
              color={color}
              toggleEdit={toggleEdit}
              deleteColor={deleteColor}
            />
          ))}
      </ul>

      {editing && (
        <EditMenu
          editColor={editColor}
          setEditColor={setEditColor}
          toggleEdit={toggleEdit}
          saveEdit={saveEdit}
        />
      )}
    </div>
  );
};

export default ColorList;
