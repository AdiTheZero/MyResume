import React from "react";
import Header from "../components/Header";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Interest from "./Interest";
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
          <Interest></Interest>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Home;
