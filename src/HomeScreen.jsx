// Dependancies Imports //
import React from "react";

//**//
// Components Imports //
import Header from "./Components/Header";
import Middle from "./Components/Middle";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer";

//**//

//Main Code//
function HomeScreen() {
  return (
    <body className="scroll-smooth w-screen border-2">
      <header className="w-screen border-2 border-black">
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
