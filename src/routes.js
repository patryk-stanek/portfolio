// Importing modules
import React from "react";
import { Switch, Route } from "react-router-dom";

// Importing components
import { Body } from "./components/Body/Body";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import { Contact } from "./components/Contact/Contact";
import { NoMatch } from "./components/NoMatch/NoMatch";

// Creating routes
export default (
    <Body>
        <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/skills"} component={Skills} />
            <Route exact path={"/portfolio"} component={Projects} />
            <Route exact path={"/contact"} component={Contact} />
            <Route component={NoMatch} />
        </Switch>
    </Body>
)