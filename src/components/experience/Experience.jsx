import React from "react";
import "./Experience.css";
import citi from "../../assets/iconciti.jpg";
import nova from "../../assets/nova.jpg";

export default function Experience() {
  return (
    <section id="experience" className="experience-container">
      <div className="experiencecard">
        <h2>WORK EXPERIENCE</h2>
        <article className="timeline">
          <div className="content">
            <div className="icon">
              <img src={citi} alt="citibanamex" />
            </div>
            <div className="timelinetext">
              <h2>
                <span className='title'>Frontend Developer</span>
                <span className='subtitle'>2019-2020</span>
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore eos dolores magnam est quod cumque, quos nulla porro
                quas minus dolor odio recusandae aliquam corporis sequi,
                repudiandae sunt ex. Perferendis!
              </p>
            </div>
          </div>
        </article>
        <article className="timeline">
          <div className="content">
            <div className="icon">
              <img src={nova} alt="citibanamex" />
            </div>
            <div className="timelinetext">
              <h2>
                <span className='title'>Frontend Developer</span>
                <span className='subtitle'>2018-2020</span>
              </h2>
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
