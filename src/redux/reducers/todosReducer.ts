import { TodoItemType } from "../../typing/types/Todo/TodoItem";

const initialState = { id: 0, title: "", done: false, priority: "", due: "" };

function todosReducer(
  state = [initialState],
  action: { type: string; payload: any }
) {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_TODOS":
      return [...payload];
    case "RESET_TODO":
      return [initialState];
    case "DELETE_TODO":
      // eslint-disable-next-line no-case-declarations
      const filteredTodo: TodoItemType[] = state.filter(
        (todo: TodoItemType) => {
          return todo.id !== payload.id;
        }
      );
      return [...filteredTodo];
    default:
      return state;
  }
}

export default todosReducer;
