import "./TodoList.style.sass";

const TodoList = (props: any) => {
  // const todoData = [];
  // axios
  //   .get("https://todo-app-back-sultondev.herokuapp.com/todos", {
  //     headers: {
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY0Mjc5NDg1LCJleHAiOjE2NjY4NzE0ODV9.ebS3mEM3Qq7mwVDEqSbX_htvL_jxuRaD-32jGMb-kgQ",
  //     },
  //   })
  //   .then(function (response) {
  //     todoData.push(...response.data);
  //     console.log(todoData);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //   });
  // props.dispatch({ type: "INIT_TODO" });
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
