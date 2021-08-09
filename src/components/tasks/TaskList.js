import Task from "./Task";

const TaskList = ({ tasks, deleteTask, editTask, completeTaskToggle }) => {
  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            completeTaskToggle={completeTaskToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
