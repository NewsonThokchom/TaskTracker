import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/error/NotFound";
import AddTaskFrom from "./components/forms/AddTaskForm";

import Header from "./components/header/Header";
import TaskList from "./components/tasks/TaskList";

function App() {
  const [heading, setHeading] = useState("Task List");
  // const [buttonLabel, setButtonLabel] = useState("Add Task");
  // const [isShowForm, setIsShowForm] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // FETCH ALL TASKS
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  // FETCH SINGLE TASK
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  const handleClick = (params) => {
    params ? setHeading("Task List") : setHeading("Add Task Form");
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks(...tasks, newTask);
  };

  // DELETE TASK
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    console.log("edit - ", id);
  };

  const togglerReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
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
