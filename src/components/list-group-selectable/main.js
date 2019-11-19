import React, { useEffect, useState } from "react";
import "./main.css";

export const ListGroupSelectable = ({ list, selectedItem, onSelectedItem }) => {
  const [hasClicked, setHasClicked] = useState(false);
  const refs = list.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  useEffect(() => {
    if (selectedItem && !hasClicked) {
      refs[selectedItem].current.scrollIntoView({
        behavior: "auto"
      });
    }
    setHasClicked(false);
  }, [selectedItem, hasClicked, refs]);

  const onClick = item => {
    onSelectedItem(item);
    setHasClicked(true);
  };

  const getClassName = item => (selectedItem === item.id ? "active" : "");

  return (
    <ul className="list-group-selectable">
      {list.map((item, index) => (
        <li
          ref={refs[item.id]}
          key={index}
          onClick={() => onClick(item)}
          className={getClassName(item)}
        >
          {item.id}
        </li>
      ))}
    </ul>
  );
};
