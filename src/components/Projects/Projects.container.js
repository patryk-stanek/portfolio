import React from "react";
import { connect } from "react-redux";

import "./Projects.scss";

import { getProjects } from "./Projects.actions";

import ProjectsComponent from "./Projects.component";

class Projects extends React.Component {

    componentDidMount() {
        this.props.getProjects();
    }

    handleUpdate() {
        this.forceUpdate();
    }
    
    render() {
        return (
            <section className="projects" id="section-portfolio">
                <ProjectsComponent projects={this.props.visibleProjects} update={this.handleUpdate.bind(this)} />
            </section>
        )
    }
}

const mapStateToProps = store => ({
    visibleProjects: store.projectsReducer.visibleProjects
});

const mapDispatchToProps = dispatch => ({
    getProjects: () => dispatch(getProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);