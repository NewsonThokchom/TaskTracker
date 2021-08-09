import { MdAlarm, MdDeleteForever, MdModeEdit, MdToday } from "react-icons/md";

const Task = ({ task, deleteTask, editTask, completeTaskToggle }) => {
  return (
    <li className={`list-item-wrapper ${task.reminder ? "reminder" : ""}`}>
      <div className="list-title-status">
        <input
          type="checkbox"
          onChange={() => completeTaskToggle(task.id)}
          checked={task.reminder}
        />
        <div>
          <h4 className="task-title">{task.text}</h4>
          <p className="task-day">
            {/* <MdToday /> */}
            {task.day}
          </p>
        </div>
      </div>

      <div className="edit-delete-btn">
        <MdModeEdit className="edit-icon" onClick={() => editTask(task.id)} />
        <MdDeleteForever
          className="delete-icon"
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </li>
  );
};

export default Task;
