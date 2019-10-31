export const GET_PROJECTS = "GET_PROJECTS";
export const SET_CATEGORY = "SET_CATEGORY";
export const CHANGE_PAGE = "CHANGE_PAGE"

export function getProjects() {
    return {
        type: GET_PROJECTS
    }
}

export function setCategory(name) {
    return {
        type: SET_CATEGORY,
        name
    }
}

export function changePage(page) {
    return {
        type: CHANGE_PAGE,
        page
    }
}