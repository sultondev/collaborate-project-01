import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
<<<<<<< HEAD
import todosReducer from "./reducers/todosReducer";
import userReducer from "./reducers/userReducer";

export const store = createStore(
  combineReducers({ todos: todosReducer, user: userReducer }),
=======
import todoItemReducer from "./reducers/todoItemReducer";
import userReducer from "./reducers/userReducer";

export const store = createStore(
  combineReducers({ todo: todoItemReducer, user: userReducer }),
>>>>>>> eb437b12b618349a214933282f7e0b15f65b0d68
  applyMiddleware(logger)
);
