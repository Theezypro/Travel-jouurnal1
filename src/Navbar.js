import React from "react";
import img1 from "./images/fill213.png";

export default function Navbar() {
  return (
    <div className="Navbar">
      <img src={img1} className="img1" alt="img1" />
      <h3>My Travel Journal.</h3>
    </div>
  );
}
