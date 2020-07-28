import React, { useRef }  from "react";
import './Layout.css'
import Sidebar from "../../components/sidebar/Sidebar";
import Home from "../../components/home/Home";
import About from "../../components/about/About";
import Experience from "../../components/experience/Experience";
import Education from "../../components/education/Education";
import Skills from "../../components/skills/Skills";
import Scroll from "../../components/scrollComponent/Scroll";

export default function Layout() {
  const aboutSection = useRef(null);
  return (
    <div className="main-container">
      <div className='row no-gutters'>
        <Scroll />
        <div className="sidebar col-lg-2 position-fixed">
          <Sidebar />
        </div>
        <div className='col-lg-10 offset-2 pages'>
          <Home />
          <About />
          {/* <Experience />
          <Education />
          <Skills /> */}
        </div>
      </div>
    </div>
  );
}
