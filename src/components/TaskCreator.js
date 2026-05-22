import { useState, useEffect } from "react";
import taskManagerLogo from "../assets/media/task-manager-logo.png";

function TaskCreator(props) {

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (props.editingTask && props.editingTask.title !== title) {
      setTitle(props.editingTask.title);
    }
  }, [props.editingTask])


  const isEditing = props.editingTask ? true : false;


  const handleSubmit = () => {

    if (!title) return null;

    if (isEditing) {

      props.onEditTask(props.editingTask.id, title)
      setTitle("");

    } else {

      props.onCreateTask(title);
      setTitle("");

    }

  };

  return (
    <section className="task-creator">
      <img src={taskManagerLogo} className="logo" alt="Task Manager Logo" />
      <p className="slogan">Your tasks organized, your day simplified.</p>
       <h2>Create a new task</h2>
      <div className="input-wrapper">
        <input type="text" placeholder="Enter your task here" value={title} maxLength={50} onChange={(e) => setTitle(e.target.value)} />
        <button className="creator-btn" onClick={handleSubmit}>{isEditing ? "Save" : "Create"}</button>
      </div>
    </section >
  );
}

export default TaskCreator;
