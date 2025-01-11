import React from "react";

const EditIcon = ({ style,color,onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    viewBox="0 0 24 24"
    onClick={onClick}
  >
    <path
      fill={color}
      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM21.41 6.34l-3.75-3.75l-2.53 2.54l3.75 3.75z"
    />
  </svg>
);
export default EditIcon;
