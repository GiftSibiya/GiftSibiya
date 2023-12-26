// Dependancies Imports //
import React from "react";

//**//

// Components Imports //
import "./HomeScreen.css";
import Header from "../Components/Header/Header";
import Middle from "../Components/Middle/Middle";
import Projects from "../Components/Projects/Projects";

//**//

//Main Code//
function HomeScreen() {
  return (
    <>
      <header className="mainHeader">
        <Header />
      </header>
      <section className="mainSection">
        <Middle />
        <Projects />
      </section>
    </>
  );
}

//**//

export default HomeScreen;
