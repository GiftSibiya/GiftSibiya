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
    <>
      <header className="w-screen">
        <Header />
      </header>
      <section className=" ">
        <Middle />
        <Projects />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

//**//

export default HomeScreen;
