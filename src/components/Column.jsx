import "./Column.css"
import Task from "./Task"
import { useStore } from "../store"

export default function Column({ state }) {
const tasks = useStore((store)=> 
    store.tasks.filter((task)=>task.state === state)
);
// console.log(tasks, "working?")

return 
<div className="column">
    <div className="titleWrapper">
    <p>{state}</p>
    <button>Add</button>
    </div>
    
    {tasks.map((task)=>
        (<Task title={task.tile} key={task.title}/>
        ))}
</div>
}