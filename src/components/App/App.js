import React from "react";
import "./App.scss";

//Importing components
import { Menubar } from "../Menubar/Menubar";
import { Header } from "../Header/Header";
import { About } from "../About/About";
import { Skills } from "../Skills/Skills";
import { Numbers } from "../Numbers/Numbers";
import { Projects } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";
import { Footer } from "../Footer/Footer"

import "./App.scss";

function App() {
  return (
    <div className="App">
        <Menubar />
        <Header />
        <About />
        <Skills />
        <Numbers />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
