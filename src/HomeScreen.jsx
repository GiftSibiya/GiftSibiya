// Dependancies Imports //
import React from "react";

//**//
// Components Imports //
import Header from "./sections/header/Header";
import Middle from "./sections/middle/Middle";
import Projects from "./sections/projects/Projects";
import Footer from "./sections/footer/Footer";

//**//

//Main Code//
function HomeScreen() {
  return (
    <body className="scroll-smooth w-screen border-2">
      <header className="w-screen">
        <Header />
      </header>
      <section className=" " id="aboutMeSection">
        <Middle />
      </section>
      <section className="" id="projectsSection">
        <Projects />
      </section>
      <footer id="getInTouchSection">
        <Footer />
      </footer>
    </body>
  );
}

export default HomeScreen;
