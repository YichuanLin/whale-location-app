import React from "react";
import "./main.css";

export const ListGroupSelectable = ({ list, selectedItem, onSelectedItem }) => {
  const getClassName = item => (selectedItem === item.id ? "active" : "");
  return (
    <ul className="list-group-selectable">
      {list.map((item, index) => (
        <li
          key={index}
          onClick={() => onSelectedItem(item)}
          className={getClassName(item)}
        >
          {item.id}
        </li>
      ))}
    </ul>
  );
};
