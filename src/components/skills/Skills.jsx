import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <section id='skills' className='skills-container'>
      <h1>Technologies I've work with</h1>
      <div className='iconscontainer'>
        <span><i class="fab fa-html5"></i><h5>HTML</h5></span>
        <span><i class="fab fa-css3-alt"></i><h5>CSS</h5></span>
        <span><i class="fab fa-js"></i><h5>JavaScript</h5></span>
        <span><i class="fab fa-angular"></i><h5>Angular</h5></span>
        <span><i class="fab fa-react"></i><h5>React</h5></span>
        <span><i class="fab fa-git-alt"></i><h5>Git</h5></span>
        <span><i class="fab fa-node-js"></i><h5>Node.js</h5></span>
        <span><i class="fab fa-envira"></i><h5>MongoDB</h5></span>
        <span><i class="fab fa-bootstrap"></i><h5>Bootstrap</h5></span>
        <span><i class="fab fa-sass"></i><h5>Sass</h5></span>
        <span><i class="fas fa-flask" title='Jasmine & Jest'></i><h5>Unit test</h5></span>
      </div>
    </section>
  )
}
