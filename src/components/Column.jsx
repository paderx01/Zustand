import "./Column.css"
import Task from "./Task"
import { useStore } from "../store"

export default function Column({ state }) {
const [text, setText] = useState('');
const [open, setOpen] = useState(false)   
    
const tasks = useStore((store)=> 
    store.tasks.filter((task)=>task.state === state)
);
// console.log(tasks, "working?")

const addTask = useStore(store=>store.addTask)

return 
<div className="column">
    <div className="titleWrapper">
    <p>{state}</p>
    <button 
    onClick={() => setOpen(true)}>Add</button>
    </div>
    
    {tasks.map((task)=>
        (<Task title={task.title} key={task.title}/>
        ))}
</div>    
}