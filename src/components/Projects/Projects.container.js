import React from "react";
import { connect } from "react-redux";

import "./Projects.scss";

import { getProjects } from "./Projects.actions";

import ProjectsComponent from "./Projects.component";

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemsToShow: 3,
            expanded: false
        }
    }

    componentDidMount() {
        this.props.getProjects();
    }

    handleUpdate() {
        this.forceUpdate();
    }

    showMore() {
        this.state.itemsToShow === 3 ? (
            this.setState({
                itemsToShow: this.props.visibleProjects.length,
                expanded: true
            })
        ) : (
            this.setState({
                itemsToShow: 3,
                expanded: false
            })
        )
    }
    
    render() {
        return (
            <section className="projects" id="section-portfolio">
                <ProjectsComponent 
                    projects={this.props.visibleProjects} 
                    update={this.handleUpdate.bind(this)} 
                    amount={this.state.itemsToShow}
                    show={this.showMore.bind(this)}
                />
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