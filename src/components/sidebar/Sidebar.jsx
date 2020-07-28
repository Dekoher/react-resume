import React from "react";
import "./Sidebar.css";
import once from "../../assets/once.jpeg";

export default function Sidebar() {
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
              <li className=""><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Experience</a></li>
              <li><a href="">Education</a></li>
              <li><a href="">Skills</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-12 icons">
          <a href='https://github.com/Dekoher'>
            <i class="fab fa-github-square"></i>
          </a>
          <a href='https://www.linkedin.com/in/diegoher-dev/'>
            <i class="fab fa-linkedin"></i>
          </a>
          <a href='https://twitter.com/Diegoher_dev'>
            <i class="fab fa-twitter-square"></i>
          </a>
          <a href="https://dev.to/diegoher">
            <i class="fab fa-dev" title="diegoher's DEV Profile"></i>
          </a>
          <a href='https://diegoher.dev'>
            <i class="fas fa-globe-americas"></i>
          </a>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-12 footer pt-4 pr-4 pl-4 position-relative">
          <p className='pb-0'>© Copyright ©2020 All rights reserved | This template is made with ❤️ and 🍺 by diegoher.dev</p>
        </div>
      </div>
    </>
  );
}
