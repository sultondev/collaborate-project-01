import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import todosReducer from "./reducers/todosReducer";
import userReducer from "./reducers/userReducer";

export const store = createStore(
  combineReducers({ todos: todosReducer, user: userReducer }),
  applyMiddleware(logger)
);
