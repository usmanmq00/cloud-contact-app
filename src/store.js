import { legacy_createStore as createStore, combineReducers } from "redux";
import { ContactForm } from "./reducers/ContactForm";

const store = createStore(combineReducers({ContactForm}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;