import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import Form from "./components/Form";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  //componentDidMount
  useEffect(() => {
    console.log("didMount1");
    const local = JSON.parse(localStorage.getItem("todoList"));
    if (local) {
      setTasks(local);
    } else {
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(tasks));
    console.log(tasks);
  }, [tasks]);

  const handleDelete = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);
  };

  const handleAdd = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Form onTaskAdd={handleAdd} />

      <ul>
        <TransitionGroup className="todo-list">
          {tasks.map((task) => (
            <CSSTransition key={task.id} timeout={500} classNames="item">
              <Task key={task.id} task={task} handleDelete={handleDelete} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
      <footer>
        <a href="https://stevebraco.fr">BracDev</a>
      </footer>
    </div>
  );
}

export default App;
