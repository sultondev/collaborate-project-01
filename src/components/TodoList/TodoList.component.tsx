import "./TodoList.style.sass";
import { useTodo } from "../../hooks/useTodo.hook";
import { TodoItemType } from "../../typing/types/Todo/TodoItem";

const TodoList = () => {
  const { todos, loading } = useTodo();
  if (loading) {
    return <div className="">Loading...</div>;
  }
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
                onClick={() => {
                  console.log("segop uko");
                }}
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
