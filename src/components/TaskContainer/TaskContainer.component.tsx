import "./TaskContainer.style.sass";

export const TaskContainer = () => {
  return (
    <div className="tasks-list__item">
      <input className="tasks-list__item-input" id="task-1" type="checkbox" />
      <input className="tasks-list__item-title" type="text" />
    </div>
  );
};
