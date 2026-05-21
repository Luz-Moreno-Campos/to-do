import TaskCard from "./TaskCard";


function TaskList (props) {
  return (
    <ul>
      {props.tasks.map((task) => 
        <TaskCard key={task.id} task={task} onToggleComplete={props.onToggleComplete} onEditTask={props.onEditTask} onRemoveTask={props.onRemoveTask}/>
      )}
    </ul>
  )
}

export default TaskList;