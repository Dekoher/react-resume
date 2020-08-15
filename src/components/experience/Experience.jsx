import React from "react";
import "./Experience.css";
import citi from "../../assets/iconciti.jpg";
import nova from "../../assets/nova.jpg";

export default function Experience() {
  return (
    <section id="experience" className="experience-container">
      <h2 className="titleexperience">Work experience</h2>
      <div className="experiencecard">
        <article className="timeline">
          <div className="content">
            <div className="icon">
              <img src={citi} alt="citibanamex" />
            </div>
            <div className="timelinetext">
              <h2 className="timelinetitle">Frontend Developer</h2>
              <h5 className="timelinesubtitle">2019-2020</h5>
              <div>
                <li>
                  Participation in the new Personal Banking Web Application
                  development for Citibanamex
                </li>
                <li>
                  Participation in the file manager application development to
                  manage the state files of the promotions web site for
                  Citibanamex
                </li>
              </div>
            </div>
          </div>
        </article>
        <article className="timeline">
          <div className="content">
            <div className="icon">
              <img src={nova} alt="citibanamex" />
            </div>
            <div className="timelinetext">
              <h2 className="timelinetitle">Frontend Developer</h2>
              <h4 className="timelinesubtitle">2018-2020</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore eos dolores magnam est quod cumque, quos nulla porro
                quas minus dolor odio recusandae aliquam corporis sequi,
                repudiandae sunt ex. Perferendis!
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
