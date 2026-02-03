import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSlice.js";

/*
Dispatching Action : Triggering a State Change
The useDispatch hook allow you to send or dispatch an action to the redux store by giving the action as an argument to the dispatch variable.
*/

export default function AddForm(){
    const [task, setTask] = useState("")
    const dispatch = useDispatch();

    let handleChange = (event) => {
        setTask(event.target.value);
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(task);
        // no need to send state(it already known by addTodo just send the data as payload for the reducer)
        dispatch(addTodo(task));  // dispatch triggers the reducer for state change so after this reducers executes now.
        setTask("");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={task} onChange={handleChange} type="text" />
                <button>Add Task</button>
            </form>
        </div>
    );
}