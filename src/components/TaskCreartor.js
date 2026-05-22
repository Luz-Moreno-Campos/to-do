import { useState, useEffect } from "react";

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

    } else {

      props.onCreateTask(title);
      setTitle("");
      
    }

  };

  return (
    <section>
      <h1>Create your task</h1>
      <input type="text" placeholder="Write your task here" value={title} maxLength={50} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleSubmit}>{isEditing ? "Save changes" : "Create"}</button>
    </section>
  );
}

export default TaskCreator;
