import React from "react";
import Header from "../components/Header";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
           
           <About></About>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="experience">
          
            
              <Experience></Experience>
              <Projects></Projects>
           
        </section>
        {/* <hr class="m-0" /> */}  


        <section class="resume-section" id="skills">
          <Skills></Skills>
        </section>

        <section class="resume-section" id="education">
          <Education></Education>
        </section>
        {/* <hr class="m-0" /> */}

      
        {/* <hr class="m-0" /> */}

        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            <p>
              Apart from being a web developer, I enjoy most of my time being
              outdoors.
            </p>
            <p class="mb-0">
              When forced indoors, I follow a number of sci-fi and fantasy genre
              movies and television shows, I spend a
              large amount of my free time exploring the latest technology
              advancements in the front-end web development world.
            </p>
          </div>
        </section>
        <hr class="m-0" />
          
      
        
      </div>
    </>
  );
};

export default Home;
