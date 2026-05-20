import TaskCreator from "./components/TaskCreator";
import TaskList from "./components/TaskList";
import { useReducer, useState, useEffect } from "react";


function reducer(state, action) {
  switch (action.type) {

    case "load-tasks":
      return action.tasks;
    case "create-task":
      return [
        ...state,
        {
          id: Date.now(), //used Date.now  to get  a unique identifier for the task.
          title: action.title,
          creationDate: action.date,
          editDate: action.date,
          completed: false,
        },
      ];

    case "edit-task":
      return state.map(task => task.id === action.id ? { ...task, title: action.title, editDate: action.date } : task);

    case "toggle-complete":
      return state.map(task => task.id === action.id ? { ...task, completed: !task.completed } : task);

    case "remove-task":
      return state.filter(task => task.id !== action.id);

    default:
      return state;
  }
}

function App() {
  const [tasks, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const savedTaskList = localStorage.getItem("tasks");
    if (savedTaskList) {
      dispatch({ type: "load-tasks", tasks: JSON.parse(savedTaskList) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);



  return (
    <div className="app-container">
      <TaskCreator />
      <TaskList />
    </div>
  );
}

export default App;
