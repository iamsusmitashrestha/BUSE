import React from "react";

export default function Details({ title, children }) {
  return (
    <div className="Details">
      <h4>{title} </h4>
      {children}
    </div>
  );
}
