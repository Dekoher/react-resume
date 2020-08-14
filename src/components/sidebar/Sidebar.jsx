import React from "react";
import "./Sidebar.css";
import once from "../../assets/once.jpeg";

export default function Sidebar() {
  const getOffsetTop = (section) => {
    const top = document.querySelector(`#${section}`).offsetTop;
    window.scrollTo({ top, behavior: "smooth" });
  };
  return (
    <div className="sidebar-container">
      <div className="picture">
        <img src={once} alt="diegoher" />
      </div>
      <div className="description">
        <h3>Diego Herrera</h3>
        <h4>Frontend Developer</h4>
      </div>
      <nav className="navigation">
        <ul>
          <li className="">
            <button onClick={() => getOffsetTop("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => getOffsetTop("about")}>About</button>
          </li>
          <li>
            <button onClick={() => getOffsetTop("experience")}>
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => getOffsetTop("education")}>Education</button>
          </li>
          <li>
            <button onClick={() => getOffsetTop("skills")}>Skills</button>
          </li>
        </ul>
      </nav>
      <div className="icons">
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
      <div className="footer">
        <p className="">
          ©{new Date().getFullYear()} Made with
          <span role="img" aria-label="icon">
            ❤️
          </span>
          , <i class="fab fa-react"></i> & 
          <span role="img" aria-label="icon">
            🍺
          </span>
          by diegoher.dev
        </p>
      </div>
    </div>
  );
}
