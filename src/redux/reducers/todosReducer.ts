import { TodoItemType } from "../../typing/types/Todo/TodoItem";

const initialState = { title: "", done: false, priority: "", due: "" };

function todosReducer(
  state = [initialState],
  action: { type: string; payload: TodoItemType[] }
) {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_TODOS":
      return [...payload];
    case "RESET_TODO":
      return [initialState];
    default:
      return state;
  }
}

export default todosReducer;
