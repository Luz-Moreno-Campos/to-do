import { IoCheckmarkCircleOutline, IoPencil, IoTrash } from "react-icons/io5";

function TaskCard(props) {
  return (
    <li key={props.task.id}> {props.task.title} {props.onEditTask ? props.task.editDate : props.task.creationDate}
      <button
        className={props.task.completed ? "complete-btn-green" : "complete-btn-red"}
        onClick={() => props.onToggleComplete(props.task.id)}><IoCheckmarkCircleOutline />
      </button>
      <button className="edit-btn" onClick={() => props.onEditTask(props.task)}><IoPencil /></button>
      <button className="remove-btn" onClick={() => props.onRemoveTask(props.task.id)}><IoTrash /></button>
    </li>
  );
}

export default TaskCard;
