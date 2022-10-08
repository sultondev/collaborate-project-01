import "./TodoList.style.sass";
import { useSelector } from "react-redux";
import { useTodo } from "../../hooks/useTodo.hook";

const TodoList = () => {
  const todoList = useSelector((state: any) => state.todos);
  const { todos, error, loading } = useTodo();
  // const { result, error, loading } = useTodo();
  // async function todoDataInit() {
  //   const response = await authProtectedApi().get("/todos");
  //   console.log(response.data);
  // }
  console.log(todos, error);
  if (loading) {
    return <div className="">Loading...</div>;
  }
  return (
    <ul className="tasks-list">
      {/* {todoData &&
        todoData.map((data: TodoItemType, index: number) => {
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
        })} */}
    </ul>
  );
};

export default TodoList;
