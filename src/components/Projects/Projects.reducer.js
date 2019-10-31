//Importing actions
import {
    GET_PROJECTS,
    SET_CATEGORY,
    CHANGE_PAGE
} from "./Projects.actions";

//Importing .json database
import projectsData from "../../assets/utils/projects.json";

//Defining initial state
const initialState = {
    projects: projectsData,
    visibleProjects: [],
    sortingOption: "" || "viewAll",
    currentPage: "" || 0
};

//Creating reducers
export default function projectsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROJECTS:
            //Getting objects array from database file
            return Object.assign({}, state, {visibleProjects: state.projects})

        case SET_CATEGORY:
            //Filter objects in database array by chosen category
            const categoryProjects = state.projects.filter(project => project.type === action.name);
            //Passing found object to new array
            return Object.assign({}, state, {visibleProjects: categoryProjects})

        case CHANGE_PAGE:
            return Object.assign({}, state, {currentPage: action.page})

        default:
            return state
    }
}