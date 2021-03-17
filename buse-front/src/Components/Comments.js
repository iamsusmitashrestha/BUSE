import React from "react";

export default function Comments({ userName, comment }) {
  return (
    <div className="comments">
      <h4 style={{ margin: "1rem 0" }}>{userName}</h4>
      <div>{comment}</div>
    </div>
  );
}
