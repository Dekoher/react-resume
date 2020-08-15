import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section id='home' className="home-container">
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
          className="cvbutton"
        >
          Download CV<i className="fas fa-cloud-download-alt"></i>
        </a>
      </div>
    </section>
  );
}
