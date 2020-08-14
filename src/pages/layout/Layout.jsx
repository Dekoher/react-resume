import React  from "react";
import './Layout.css'
import Sidebar from "../../components/sidebar/Sidebar";
import Home from "../../components/home/Home";
import About from "../../components/about/About";
import Experience from "../../components/experience/Experience";
// import Education from "../../components/education/Education";
import Skills from "../../components/skills/Skills";
// import Scroll from "../../components/scrollComponent/Scroll";

export default function Layout() {
  const openSidebar = event => {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');
    console.log(hamburger);
    if (sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
    } else {
      sidebar.classList.add('open');
    }
  };
  return (
    <div className="main-container">
      {/* <Scroll /> */}
      <button className='hamburger' onClick={(e) => openSidebar(e)}><i className="fas fa-bars"></i></button>
      <aside className='sidebar'>
        <Sidebar />
      </aside>
      <div className='pages'>
        <Home />
        <About />
        <Skills />
        <Experience />
      </div>
        {/* <div className="sidebar col-lg-2 position-fixed">
          <Sidebar />
        </div>
        <div className='col-lg-10 offset-2 pages'>
          <Education />
        </div> */}
    </div>
  );
}
