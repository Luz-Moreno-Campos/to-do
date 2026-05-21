import { useState } from "react";

function TaskCreator(props) {

  const [title, setTitle] = useState("");

  const handleCreate = () => {
   
    if (!title) return null;
    props.onCreateTask(title);
    setTitle("");

  };

  return (
    <section>
      <h1>Create your task</h1>
      <input type="text" placeholder="Write your task here" value={title} maxLength={50} onChange={(e) => setTitle(e.target.value)}/>
      <button onClick={handleCreate}>Create</button>
    </section>
  );
}

export default TaskCreator;
