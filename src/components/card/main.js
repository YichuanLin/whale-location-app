import React from "react";

import "./main.css";

export const Card = ({ image, title, subtitle, content, button }) => {
  return (
    <div className="card">
      {image && (
        <img src={image.src} alt={image.alt} style={{ width: "100%" }} />
      )}
      {title && <h1>{title}</h1>}
      {subtitle && <p className="subtitle">{subtitle}</p>}
      <p>{content}</p>
      {button && (
        <p>
          <button onClick={button.onClick}>{button.text}</button>
        </p>
      )}
    </div>
  );
};
