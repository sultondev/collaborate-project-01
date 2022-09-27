import { createStore } from "redux";
import { TodoItemType } from "../typing/types/Todo/TodoItem";

const initialState = {
  todo: { id: 0, title: "", done: false, priority: "", due: "" },
};

function reducer(
  state = initialState,
  action: { type: string; payload: TodoItemType }
) {
  console.log("reducer", state, action);
  const { type, payload } = action;
  switch (type) {
    case "CREATE_TODO":
      return {
        todo: {
          id: payload.id,
          title: payload.title,
          done: payload.done,
          priority: payload.priority,
          due: payload.due,
        },
      };
    default:
      return state;
  }
}
export const store = createStore(reducer);
