import React from "react";
import "./About.css";
import uno from "../../assets/uno.jpeg";

export default function About() {
  return (
    <section id="about" className="about-container">
      <article className="aboutcard">
        <div className="background"></div>
        <header className="col-12">
          <img className="col-3" src={uno} alt="myself" />
          <div className='col-9'>
            <h1>WHO AM I?</h1>
            <p>
              I am a Frontend Developer with 2 years of experience working with
              cutting-edges technologies like Angular 8+ and ReactJs for the
              Frontend and basics of Node.js, with Express.js for the backend,
              etc, I’m passionate about web technologies, the Internet of
              Things(IoT) and electronic music, for that reason in my free times
              i like to be learning new technologies on my own, mix some music,
              and do maker IoT projects.
            </p>
          </div>
        </header>
      </article>
    </section>
  );
}
