// //Task List:
// //1. When the component mounts, make an axios call to retrieve all color data and push to state.
// //2. Complete saveEdit, deleteColor functions
// import React, { useEffect, useState } from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth";
// import Bubbles from "./Bubbles";
// import ColorList from "./ColorList";
//
// const BubblePage = () => {
//   const [colorList, setColorList] = useState([]);
//
//   useEffect(() => {
//     axiosWithAuth().get('/colors')
//     .then((res) => {
//       console.log(res);
//         setColorList(res.data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//  }, [])
//
//   return (
//     <div className="container">
//       <ColorList colors={colorList} updateColors={setColorList} />
//       <Bubbles colors={colorList} />
//     </div>
//   );
// };
//
// export default BubblePage;
import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import {
  editColors,
  deleteColors,
  fetchColors
} from "../services/fetchColorService";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    editColors( editColor );
  };

  const deleteColor = (colorToDelete) => {
    deleteColors( colorToDelete.id );
  };

  useEffect( () => {
    fetchColors( setColors );
  }, [] );

  return (
    <div className="container">
      { colors && (
        <ColorList
          colors={ colors }
          editing={ editing }
          toggleEdit={ toggleEdit }
          saveEdit={ saveEdit }
          deleteColor={ deleteColor }
        />
      ) }
      { colors && <Bubbles colors={ colors } /> }
      { !colors && <p>Colors not found</p> }
    </div>
  );
};

export default BubblePage;
