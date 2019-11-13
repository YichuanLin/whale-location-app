import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css";

export const Header = ({ links }) => {
  return (
    <div className="topnav">
      {links &&
        links.length &&
        links.map(({ url, label }, index) => {
          return (
            <NavLink exact key={index} to={url}>
              {label}
            </NavLink>
          );
        })}
    </div>
  );
};
