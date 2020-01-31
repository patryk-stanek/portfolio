import React from "react";
import { connect } from "react-redux";

import "./Projects.scss";

import { getProjects } from "./Projects.actions";
import Fade from "react-reveal";

import Project from "./Project";

class Projects extends React.Component {
    componentDidMount() {
        this.props.getProjects();
    }
    
    render() {
        return (
            <section className="section projects" id="section-portfolio">
                <Fade>
                    <div className="container">
                        <div className="icon-head-container">
                            <i className="icon-head lnr lnr-star"></i>
                        </div>
                        <div className="projects__portfolio content">
                            {
                                this.props.visibleProjects.map(project => {
                                    return (
                                        <Project 
                                            project={project}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </Fade>
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