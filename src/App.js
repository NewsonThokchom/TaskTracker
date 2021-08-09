import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import NotFound from "./components/error/NotFound";
import AddTaskFrom from "./components/forms/AddTaskForm";

import Header from "./components/header/Header";
import TaskList from "./components/tasks/TaskList";

function App() {
  const history = useHistory();

  const [heading, setHeading] = useState("Task List");
  // const [buttonLabel, setButtonLabel] = useState("Add Task");

  // const [isShowForm, setIsShowForm] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 7th at 1:30pm",
      reminder: false,
    },
  ]);

  const handleClick = (params) => {
    params ? setHeading("Task List") : setHeading("Add Task Form");
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks(...tasks, newTask);
    console.log(task);
  };

  const deleteTask = (id) => {
    // console.log("Delete - ", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    console.log("edit - ", id);
  };

  const togglerReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Header
                heading={heading}
                // buttonLabel={buttonLabel}
                handleClick={handleClick}
                // isShowForm={isShowForm}
              />

              {tasks.length > 0 ? (
                <TaskList
                  tasks={tasks}
                  deleteTask={deleteTask}
                  editTask={editTask}
                  completeTaskToggle={togglerReminder}
                />
              ) : (
                "No Tasks To Show"
              )}
            </Route>

            <Route exact path="/form">
              <Header
                heading={heading}
                // buttonLabel={buttonLabel}
                handleClick={handleClick}
                // isShowForm={isShowForm}
              />
              <AddTaskFrom onAdd={addTask} />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <br />
        <br />
        <br />
      </div>
    </Router>
  );
}

export default App;
