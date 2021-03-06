import React from "react";
import "./About.css";
import uno from "../../assets/uno.jpeg";

export default function About() {
  return (
    <section id="about" className="about-container">
      <h1 className='title'>Who am I?</h1>
      <article className="aboutcard">
        <div>
          <img className="headerimage" src={uno} alt="myself" />
        </div>
        <div className="abouttext">
          <p>
            I am a Frontend Developer with 2 years of experience working with
            cutting-edges technologies like Angular 8+ and ReactJs for the
            Frontend and basics of Node.js, with Express.js for the backend,
            etc, I’m passionate about web technologies, the Internet of
            Things(IoT) and electronic music, for that reason in my free times i
            like to be learning new technologies on my own, mix some music, and
            do maker IoT projects.
          </p>
        </div>
      </article>
    </section>
  );
}
