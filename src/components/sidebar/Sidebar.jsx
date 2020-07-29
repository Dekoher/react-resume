import React from "react";
import "./Sidebar.css";
import once from "../../assets/once.jpeg";

export default function Sidebar() {
  const getOffsetTop = section => {
    const top = document.querySelector(`#${section}`).offsetTop;
    window.scrollTo({ top, behavior: 'smooth'});
  };
  return (
    <>
      <div className="row no-gutters">
        <div className="col-12 picture">
          <img src={once} alt="diegoher" />
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-12 description">
          <h3>Diego Herrera</h3>
          <h4>Frontend Developer</h4>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-12 menu">
          <nav className="navigation">
            <ul>
              <li className="">
                <button onClick={() => getOffsetTop('home')}>Home</button>
              </li>
              <li>
                <button onClick={() => getOffsetTop('about')}>About</button>
              </li>
              <li>
                <button onClick={() => getOffsetTop('experience')}>Experience</button>
              </li>
              <li>
                <button onClick={() => getOffsetTop('education')}>Education</button>
              </li>
              <li>
                <button onClick={() => getOffsetTop('skills')}>Skills</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-12 icons">
          <a href="https://github.com/Dekoher">
            <i className="fab fa-github-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/diegoher-dev/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/Diegoher_dev">
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="https://dev.to/diegoher">
            <i className="fab fa-dev" title="diegoher's DEV Profile"></i>
          </a>
          <a href="https://diegoher.dev">
            <i className="fas fa-globe-americas"></i>
          </a>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-12 footer pt-4 pr-4 pl-4 position-relative">
          <p className="pb-0">
            ©Copyright ©2020 All rights reserved | This template is made with{" "}
            <span role="img" aria-label="icon">
              ❤️
            </span>{" "}
            and{" "}
            <span role="img" aria-label="icon">
              🍺
            </span>{" "}
            by diegoher.dev
          </p>
        </div>
      </div>
    </>
  );
}
