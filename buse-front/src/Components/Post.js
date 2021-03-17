import React from "react";

export default function Post(props) {
  return (
    <div className="post">
      <img id="bed" src={props.image} alt="" />
      <div className="post-details">
        <div className="post-title">{props.title}</div>
        {/* <img id="star" src={star} alt="" /> */}
        {/* <span>{props.rating}</span> */}
        <span className="product-name-rs">{props.location}</span>
        <span className="product-name-rs">Rs. {props.price}</span>
      </div>
    </div>
  );
}
