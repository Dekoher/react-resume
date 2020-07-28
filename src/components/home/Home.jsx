import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="background"></div>
      <div className="text">
        <h1>
          Hi!{" "}
          <span role="img" aria-label="icon">
            👋
          </span>
          <br />
          I'm Diego
        </h1>
        <a
          href="https://drive.google.com/file/d/1ZabtvydpHzEjuMjq629AIqAr7yo4LNna/view?usp=sharing"
          className="btn btn-light"
        >
          Download CV<i class="fas fa-cloud-download-alt"></i>
        </a>
      </div>
    </div>
  );
}
