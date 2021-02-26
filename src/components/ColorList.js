import React, { useState } from "react";
import EditMenu from './EditMenu';
import axiosWithAuth from "../helpers/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors, getColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

   //Task List:
  //1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
    .then(res => {
      console.log('PUT RESPONSE: ', res.data)
      setEditing(false)
      updateColors(colors.map(color => {
        if(color.id === res.data.id) {
          return res.data
        } else {
          return color
        }
      }))
    })
    .catch(err => {
      console.log('PUT ERROR: ', err)
    })
  };

   
  //2. Complete the deleteColor functions by making a delete request for deleting colors.
  const deleteColor = colorToEdit => {
    axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/${colorToEdit.id}`)
    .then(res => {
      console.log('DELETE RESPONSE: ', res)
      getColors()
    })
    .catch(err => {
      console.log('DELETE ERROR: ', err)
    })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;