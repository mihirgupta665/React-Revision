import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
// React 5 core concepts: i> components, ii> props, iii> states, iv> hooks, V> events

export default function ToDoApp(){
    let [todos, setTodos] = useState([{task: "Simple Task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTodo = () => {
        setTodos(() => {
            return [...todos, { task: newTodo, id: uuidv4(), isDone: false }];
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        // console.log(event.target.value);
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        // console.log(`Task with id "${id}" is going to be deleted`);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id ));
        
    }

    let upperCaseAll = () => {
        //  always check that we are updating on previous values or not 
        setTodos((prevTodos) => prevTodos.map((todo) =>  {
            return { ...todo, task: todo.task.toUpperCase() };
        }));
    }

    let markAsDone = (id) => {
        // console.log(id);
        setTodos( (prevTodos) => prevTodos.map((todo) => {
            if(todo.id === id){
                return { ...todo, isDone: true }
            }
            else{
                return { ...todo }
            }
        }));
    }


    let markAllAsDone = () => {
        setTodos( (prevTodos) => prevTodos.map((todo) => {
            return {...todo, isDone: true};
        }));
    }



    return (
        <>
            <input type="text" placeholder="Enter the Task" value={newTodo} onChange={updateTodoValue} />
            <br />
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
                        <li key={todo.id}>
                            <span style={ todo.isDone ? {textDecorationLine : "line-through"} : {} }>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
{/* to pass a argument in reference we need to write the function in a call back function thereby defining a new function and not executing it. */}
                            <button onClick={ () => deleteTodo(todo.id) }>Delete</button>
                            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                            <br />
                            <br />
                        </li>
                        
                    ))
                }
            </ul>
            <br />
            <br />
            <button onClick={upperCaseAll}>UpperCaseAll</button>
            <br />
            <br />
            <button onClick={markAllAsDone}>Mark All As Done</button>

        </>
    );
}