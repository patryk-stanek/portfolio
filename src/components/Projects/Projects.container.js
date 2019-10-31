import React from "react";
import { connect } from "react-redux";

import "./Projects.scss";

import ProjectsComponent from "./Projects.component";

class Projects extends React.Component {
    
    render() {
        if (this.props.projects !== undefined) {
            return (
                <section className="projects" id="section-portfolio">
                    <ProjectsComponent projects={this.props.projects}/>
                </section>
            )
        } else {
            return(
                <span>Loading...</span>
            )
        }
    }
}

const mapStateToProps = store => ({
    projects: store.projectsReducer.projects
});

export default connect(mapStateToProps)(Projects);