import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import messagesReducer from './messages';

export const reducer = combineReducers({
  messagesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;


// import { createStore, compost, combineReducers, applyMiddleware } from "redux";

// const initialState = {message: 'Some String that you wanna show.'};

// function rootReducer(state = initialState, action) {
//     console.log(action.type);
//     switch (action.type) {
//         default:
//             return state
//     }
// }

// const reducer = combineReducers({
//     rootReducer,
// })

// const store = createStore(
//     reducer,
//     undefined,
// )

// export default store;

// export default function configureStore() {
//   const store = createStore(rootReducer, initialState);
//   return store;
// }