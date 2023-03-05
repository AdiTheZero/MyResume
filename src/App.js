import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Interest from "./pages/Interest";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
         

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
