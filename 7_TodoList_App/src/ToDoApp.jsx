import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function ToDoApp(){
    let [todos, setTodos] = useState([{task: "Simple Task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTodo = () => {
        setTodos(() => {
            return [...todos, { task: newTodo, id: uuidv4() }];
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        // console.log(event.target.value);
        setNewTodo(event.target.value);
    }

    return (
        <>
            <input type="text" placeholder="Enter the Task" value={newTodo} onChange={updateTodoValue} />
            <br />
            <button onClick={addNewTodo}>Add Task</button>
            <br />
            <br />
            <br />
            <hr />
            <h1>ToDo List</h1>
            <ul>
                {
                    // list should have a unique key for its uniquely identification which helps in deleting and editing.
                    todos.map((todo) => (
                        <li key={todo.id}>{todo.task}</li>
                    ))
                }
            </ul>
        </>
    );
}