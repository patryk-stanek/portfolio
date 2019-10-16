import React from "react";
import "./App.scss";

//Importing components
import { Header } from "../Header/Header";
import { About } from "../About/About";
import { Skills } from "../Skills/Skills";
import { Numbers } from "../Numbers/Numbers";
import { Projects } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";
import { Footer } from "../Footer/Footer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Patryk Stanek</h1>
        <h2>Junior Front End Developer</h2>
      </header>
      <div>
        <Header />
        <About />
        <Skills />
        <Numbers />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
