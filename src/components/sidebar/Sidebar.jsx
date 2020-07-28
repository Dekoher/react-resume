import React, { useRef } from "react";
import "./Sidebar.css";
import once from '../../assets/once.jpeg'

export default function Sidebar() {
  const aboutSection = useRef(null);
  // const goToAboutSection = () => window.scrollTo({
  //   top: aboutSection.current.offsetTop,
  //   behavior: 'smooth'
  // });
  return (
    <>
      <div className="row no-gutters">
        <div className="col-12 picture">
          <img src={once} alt='diegoher'/>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-12 description">
          <p>Diego Herrera</p>
          <p>Frontend Developer in Mexico</p>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-12 menu">
          <nav role="navigation">
            <ul>
              <li className="active">Home</li>
              <li>About</li>
              {/* <li><a href="#experience"></a></li>
              <li><a href="#education"></a></li>
              <li><a href="#skills"></a></li> */}
            </ul>
          </nav>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-12 icons">icons</div>
      </div>
      <div className="row no-gutters">
        <div className="col-12 footer">footer</div>
      </div>
    </>
  );
}
