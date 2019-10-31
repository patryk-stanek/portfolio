import React from "react";
import { connect } from "react-redux";

import {
    getProjects,
    setCategory
} from "../Projects/Projects.actions";

import "./SortingProjects.scss";

class SortingProjects extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            selectedOption: "" || "all"
        }

        this.handleCategory = this.handleCategory.bind(this);
        this.handleAll = this.handleAll.bind(this);
    }

    componentDidMount() {
        this.setState({
            selectedOption: this.props.sortingOption
        })
        if (this.props.sortingOption === "viewAll") {
            this.props.getProjects();
        }
    }

    handleCategory(option) {
        console.log(option);
        this.props.setCategory(option);
    }

    handleAll() {
        this.props.getProjects();
    }

    handleOptionChange(event) {
        this.setState({
            selectedOption: event.target.value
        })
    }

    render() {
        return (
            <form className="sorting">
                <div className="sorting__container">
                    <input 
                        type="radio"
                        id="option-b1"
                        value="all"
                        onClick={() => this.handleAll()}
                        onChange={this.handleOptionChange.bind(this)}
                        checked={this.state.selectedOption === "all"}
                        className="sorting__input"
                    />
                    <label 
                        htmlFor="option-b1"
                        className="sorting__label"
                    >
                        {this.props.textOptionAll}
                    </label>
                </div>
                <div className="sorting__container">
                    <input 
                        type="radio"
                        id="option-b2"
                        value="webd"
                        onClick={() => this.handleCategory("webd")}
                        onChange={this.handleOptionChange.bind(this)}
                        checked={this.state.selectedOption === "webd"}
                        className="sorting__input"
                    />
                    <label 
                        htmlFor="option-b2"
                        className="sorting__label"
                    >
                        {this.props.textOptionWebD}
                    </label>
                </div>
                <div className="sorting__container">
                    <input 
                        type="radio"
                        id="option-b3"
                        value="app"
                        onClick={() => this.handleCategory("app")}
                        onChange={this.handleOptionChange.bind(this)}
                        checked={this.state.selectedOption === "app"}
                        className="sorting__input"
                    />
                    <label 
                        htmlFor="option-b3"
                        className="sorting__label"    
                    >
                        {this.props.textOptionApp}
                    </label>
                </div>
            </form>
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