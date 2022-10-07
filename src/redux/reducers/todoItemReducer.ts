import { TodoItemType } from "../../typing/types/Todo/TodoItem";

const initialState = { title: "", done: false, priority: "", due: "" };

function todoItemReducer(
  state = initialState,
  action: { type: string; payload: TodoItemType }
) {
  const { type, payload } = action;
  switch (type) {
    case "CREATE_TODO":
      return {
        title: payload.title,
      };
      break;
    case "RESET_TODO":
      return {
        initialState,
      };
    default:
      return state;
      break;
  }
}

export default todoItemReducer;
