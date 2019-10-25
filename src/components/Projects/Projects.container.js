import React from "react";

import "./Projects.scss";

import ProjectsComponent from "./Projects.component";

export class Projects extends React.Component {
    render() {
        return (
            <section className="projects" id="section-portfolio">
                <ProjectsComponent />
            </section>
        )
    }
}