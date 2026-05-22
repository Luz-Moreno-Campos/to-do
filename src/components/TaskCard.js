import { IoCheckmarkCircle, IoPencil, IoTrash } from "react-icons/io5";

function TaskCard(props) {
  return (
    <li className={`task-card ${props.task.completed ? "task-completed" : ""}`} key={props.task.id}>
      <span className="card-title">{props.task.title}</span>
      <span className="card-date">
        {props.task.editDate !== props.task.creationDate ? `Edited on ${props.task.editDate}` : `Created on ${props.task.creationDate}`}
      </span>

      <button
        className={props.task.completed ? "complete-btn-green" : "complete-btn-red"}
        onClick={() => props.onToggleComplete(props.task.id)}><IoCheckmarkCircle />
      </button>
      <button className="edit-btn" onClick={() => props.onEditTask(props.task)}><IoPencil /></button>
      <button className="remove-btn" onClick={() => props.onRemoveTask(props.task.id)}><IoTrash /></button>
    </li>
  );
}

export default TaskCard;
