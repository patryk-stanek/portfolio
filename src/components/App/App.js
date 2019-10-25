import React, { Suspense } from "react";
import "./App.scss";

//Importing components
import { Menubar } from "../Menubar/Menubar.container";
import { Header } from "../Header/Header.container";
import { About } from "../About/About.container";
import { Skills } from "../Skills/Skills.container";
import { Projects } from "../Projects/Projects.container";
import { Contact } from "../Contact/Contact.container";
import { Footer } from "../Footer/Footer.container"

import "./App.scss";


function App() {
  return (
    <div className="App">
        <Suspense fallback={null}>
          <Menubar />
          <Header />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
    </div>
  );
}

export default App;
