import "./Column.css";
import Task from "./Task";
import { useStore } from "../store";
import {useState} from 'react';

export default function Column({ state }) {
const [text, setText] = useState('');
const [open, setOpen] = useState(false)   
    
const tasks = useStore((store)=> 
    store.tasks.filter((task)=>task.state === state)
);

const addTask = useStore(store=>store.addTask)
const setDraggedTask = useStore(store=>store.setDraggedTask);
const draggedTask = useStore(store=>store.setDraggedTask);
const moveTask = useStore((store)=>store.moveTask);


return 
<div className="column" onDragOver={e=>{e.preventDefault()}}
    onDrop={e=>{
        setDraggedTask(null)
        moveTask(draggedTask, state)
    }}>
    <div className="titleWrapper">
    <p>{state}</p>
    <button 
    onClick={() => setOpen(true)}>Add</button>
    </div>
    
    {tasks.map((task)=>
        (<Task title={task.title} key={task.title}/>
        ))}
        {open && (
        <div className='Modal'>
            <div className='modalContent'>
                <input onChange={(e)=>setText(e.target.value)} value={text} />
                <button onClick={()=>{
                    addTask(text, state);
                    setText('');
                    setOpen(false);
                }}>
                    Submit
                    </button>
            </div>
        </div>
        )};
</div>    
}