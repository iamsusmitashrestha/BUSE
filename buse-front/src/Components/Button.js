import React from "react";

export default function Button({ children, variant, onClick, fullWidth }) {
  let bgColor = "#575a89";
  let color = "#d0cde1";

  if (variant === 1) {
    bgColor = "#fcd661";
    color = "#333";
  } else if (variant === 2) {
    bgColor = "#fb6d3b";
    color = "#FFF";
  } else if (variant === 3) {
    bgColor = "#503e9d";
  } else if (variant === 4) {
    bgColor = "#ff6584";
    color = "#FFF";
  }

  return (
    <div style={{ width: fullWidth ? "100%" : "70%", margin: "auto" }}>
      <button
        onClick={onClick}
        style={{
          width: "100%",
          padding: "0.75rem",
          borderRadius: "0.5rem",
          border: 0,
          background: bgColor,
          color: color
        }}
      >
        {children}
      </button>
    </div>
  );
}
