//Importing methods
import { createStore } from "redux";

//Importing reducers
import reducers from "./reducers";
import { getProjects } from "./components/Projects/Projects.actions";

//Creating store with reducers
const store = createStore(reducers);

//Logging state of the store to console
store.subscribe(() => console.log(store.getState()));

console.log(getProjects());
console.log(store.getState());

export default store;