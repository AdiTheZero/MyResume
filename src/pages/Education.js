import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
         <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                {/* collage name */}
                 <h3 class="mb-0">Dr. A.P.J. Abdul Kalam Technical University,Lucknow.</h3> 
                {/* //bca education */}
                <div class="subheading mb-3">Master of Computer Application </div>
                <div>CGPA 7.5</div>
                <p>Percentage 75%</p>
              </div>
              {/* collage kb se kb tk hua */}
              <div class="flex-shrink-0">
                <span class="text-primary">August 2020 - May 2022</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                {/* collage name */}
                 <h3 class="mb-0">Mahatma Jyotiba Phule Rohilkhand University, Bareilly.</h3> 
                {/* //bca education */}
                <div class="subheading mb-3">Bachelor of Computer Application</div>
                {/* <div>CGPA 7.5</div> */}
                <p>Percentage 65%</p>
              </div>
              {/* collage kb se kb tk hua */}
              <div class="flex-shrink-0">
                <span class="text-primary">August 2016 - July 2019</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Kendriya Vidyalaya</h3>
                <div class="subheading mb-3"> Higher secondary (12th)</div>
                <p>Percentage 68 %</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2015 - May 2016</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Kendriya Vidyalaya</h3>
                <div class="subheading mb-3">High School (10th)</div>
                <p>CGPA: 7.8</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2012 - May 2013</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Education;
