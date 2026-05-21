import TaskCard from "./TaskCard";

function TaskList (props) {
  return (
    <ul>
      {props.tasks.map((task) => 
        <li key={task.id}>
          {task.title}
          {task.creationDate}
        </li>
      )}
    </ul>
  )
}

export default TaskList;