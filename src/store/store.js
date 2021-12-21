import {combineReducers, createStore} from 'redux';
import counterReducer from "../components/reducer/counterSlice";
import messageReducer from "../components/reducer/messages";

let reducers = combineReducers( {
    counter: counterReducer,
    messagePage: messageReducer,
});

const store = createStore(reducers);

export default store;