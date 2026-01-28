import { useState } from "react";

export default function ToDoApp(){
    let [todos, setTodos] = useState(["Sample Task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTodo = () => {
        setTodos(() => {
            return [...todos, newTodo];
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
                    todos.map((todo) => (
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </>
    );
}