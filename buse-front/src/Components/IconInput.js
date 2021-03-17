import React from "react";

export default function IconInput({ placeholder, type, img, xRef }) {
  return (
    <div className="iconinput">
      <img src={img} alt="" />
      <input type={type} placeholder={placeholder} ref={xRef} />
    </div>
  );
}
