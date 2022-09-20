import { TaskContainer } from "../../components/TaskContainer/TaskContainer.component";
import "./Tasks.style.sass";
const Tasks = () => {
  return (
    <section className="tasks">
      <div className="tasks-container">
        <div className="tasks-container__bg"></div>
        <header className="tasks-header">
          <h1 className="tasks-header__heading">TODO</h1>
          <div className="tasks-header__theme"></div>
        </header>
      </div>
    </section>
  );
};

export default Tasks;
