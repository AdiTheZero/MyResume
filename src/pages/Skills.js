import React from "react";
import Header from "../components/Header";

const Skills = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>
             
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-node-js"></i>
              </li>
              
              <li class="list-inline-item">
                <i class="fab fa-npm"></i>
              </li>

              <li class="list-inline-item">
             
            <i class="devicon-express-original colored"></i>
          
              </li>
              <li class="list-inline-item">
             <i class="devicon-mysql-plain colored"></i>
             </li>
             <li class="list-inline-item">
            
             <i class="devicon-cplusplus-plain colored"></i>
          
             </li>
            </ul>
            <div class="subheading mb-3">Programming Languages</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
              HTML5
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                CSS
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
              JavaScript
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                ReactJs
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                NodeJs
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                ExpressJs
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Postman
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                SQL,MYSQL
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                C++
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Skills;
