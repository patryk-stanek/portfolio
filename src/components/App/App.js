import React, { Suspense } from "react";
import "./App.scss";

//Importing components
import { Menubar } from "../Menubar/Menubar";
import { Header } from "../Header/Header";
import { About } from "../About/About";
import { Skills } from "../Skills/Skills";
import { Projects } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";
import { Footer } from "../Footer/Footer"

import "./App.scss";

import "../../i18n";
import Hello from "../../dummy/Hello";
import ThankYou from "../../dummy/ThankYou";
import LanguageSelector from "../../dummy/i18n.changeLanguage";

function App() {
  return (
    <div className="App">
        <div>
          <Suspense fallback={null}>
            <LanguageSelector />
            <Hello />
            <ThankYou />
          </Suspense>
        </div>
        <Menubar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
