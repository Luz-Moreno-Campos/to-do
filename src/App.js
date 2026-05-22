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
  const [editingTask, setEditingTask] = useState(null);
  const [loadedTasks, setLoadedTasks] = useState(false);



  useEffect(() => {
    const savedTaskList = localStorage.getItem("tasks");
    if (savedTaskList) {
      dispatch({ type: "load-tasks", tasks: JSON.parse(savedTaskList) });
    }
    setLoadedTasks(true);
  }, []);

  useEffect(() => {
    if (!loadedTasks) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, loadedTasks]);


  const handleCreateTask = (title) => {
    const now = new Date().toLocaleString();
    dispatch({ type: "create-task", title, date: now });
  };


  const handleStartEditingTask = (task) => {
    setEditingTask(task);
  };

  const handleEditTask = (id, newTitle) => {
    const now = new Date().toLocaleString();
    dispatch({ type: "edit-task", id, title: newTitle, date: now });
    setEditingTask(null);

  };

  const handleToggleComplete = (id) => {
    dispatch({ type: "toggle-complete", id });
  };

  const handleRemoveTask = (id) => {
    dispatch({ type: "remove-task", id });
  };


  return (
    <div className="app-container">
      <TaskCreator onCreateTask={handleCreateTask} editingTask={editingTask} onEditTask={handleEditTask} />
      <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} onRemoveTask={handleRemoveTask} onEditTask={handleStartEditingTask} />
    </div>
  );
}

export default App;
