// Dependancies Imports //
import React from "react";

//**//

// Components Imports //
import "./HomeScreen.css";
import Header from "../Components/Header/Header";
import Middle from "../Components/Middle/Middle";
import Projects from "../Components/Projects/Projects";
import Footer from "../Components/Footer/Footer";

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
      <footer>
        <Footer />
      </footer>
    </>
  );
}

//**//

export default HomeScreen;
