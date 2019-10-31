import React, { Suspense } from "react";
import "./App.scss";

import { Provider } from "react-redux";
import store from "../../store";

//Importing components
import { Menubar } from "../Menubar/Menubar.container";
import { Header } from "../Header/Header.container";
import { About } from "../About/About.container";
import { Skills } from "../Skills/Skills.container";
import Projects from "../Projects/Projects.container";
import { Contact } from "../Contact/Contact.container";
import { Footer } from "../Footer/Footer.container"

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
