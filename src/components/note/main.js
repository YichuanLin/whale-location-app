import React from "react";

import "./main.css";

const TYPE = {
  DANGER: "danger",
  SUCCESS: "success",
  INFO: "info",
  WARNING: "warning"
};

export const Note = ({ type = TYPE.INFO, title, description }) => {
  return (
    <div className={`note ${type}`}>
      <p>
        {title && <strong>{title}</strong>} {description}
      </p>
    </div>
  );
};

Note.TYPE = TYPE;
