//Importing actions
import {
    GET_PROJECTS
} from "./Projects.actions";

//Importing .json database
import projectsData from "../../assets/utils/projects.json";

//Defining initial state
const initialState = {
    projects: projectsData,
    visibleProjects: []
};

//Creating reducers
export default function projectsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROJECTS:
            //Getting objects array from database file
            return Object.assign({}, state, {visibleProjects: projectsData})
        default:
            return state
    }
}