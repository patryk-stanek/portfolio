import React from "react";
import { connect } from "react-redux";

import {
    getProjects,
    setCategory
} from "../Projects/Projects.actions";

class SortingProjects extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            selectedOption: ""
        }

        this.xxx = this.xxx.bind(this);
    }

    componentWillMount() {
        this.setState({
            selectedOption: this.props.sortingOption
        })
        if (this.props.sortingOption === "viewAll") {
            this.props.getProjects();
        }
    }

    xxx(option) {
        console.log(option);
        this.props.setCategory(option);
    }

    render() {
        return (
            <div>
                <span>x</span>
                <span onClick={this.xxx("webd")}>y</span>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    sortingOption: store.projectsReducer.sortingOption
});

const mapDispatchToProps = dispatch => ({
    getProjects: () => dispatch(getProjects()),
    setCategory: option => dispatch(setCategory(option))
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingProjects);