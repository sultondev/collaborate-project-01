import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import todoItemReducer from "./reducers/todoItemReducer";
import userReducer from "./reducers/userReducer";

export const store = createStore(
  combineReducers({ todo: todoItemReducer, user: userReducer }),
  applyMiddleware(logger)
);
