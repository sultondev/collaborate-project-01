import "./TodoList.style.sass";
import { useTodo } from "../../hooks/useTodo.hook";
import { TodoItemType } from "../../typing/types/Todo/TodoItem";
import { authProtectedApi } from "../../config/axios.config";
import { useDispatch } from "react-redux";

const TodoList = () => {
  const { todos, loading } = useTodo();
  const dispatch = useDispatch();
  if (loading) {
    return <div className="">Loading...</div>;
  }

  const deleteTodoItemNoRender = async (id: number) => {
    const response = await authProtectedApi().delete(`/todos/${id}`);
    if (response.status === 200) {
      dispatch({ type: "DELETE_TODO", payload: { id: id } });
    }
  };

  return (
    <ul className="tasks-list">
      {todos &&
        todos.map((data: TodoItemType, index: number) => {
          return (
            <li className="tasks-list__item" key={data.title + index}>
              <div className="tasks-list__item-wrapper">
                <input type="checkbox" name="" id="" />
                {data.title}
              </div>

              <button
                className="tasks-list__item-delete"
                onClick={() => deleteTodoItemNoRender(data.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default TodoList;
