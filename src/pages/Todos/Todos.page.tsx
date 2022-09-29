import "./Todos.style.sass";
import { TodoList } from "../../components/TodoList/TodoList.component";
const TodosPage = () => {
  return (
    <section className="tasks">
      <div className="tasks-container">
        <header className="tasks-header">
          <h1 className="tasks-header__heading">TODO</h1>
          <div className="tasks-header__theme"></div>
        </header>
        <TodoList />
      </div>
    </section>
  );
};

export default TodosPage;
