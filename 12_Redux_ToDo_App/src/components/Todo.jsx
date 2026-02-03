import { useSelector } from "react-redux";  // its a function which takes a call back function and returns the state(data) of the store
import AddForm from "./AddForm.jsx";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/Todo/todoSlice.js"

// The useSelector hooks allow to extract data or the state from the redux store using a selector function. (returns the data of state)
export default function Todo(){
    const todos = useSelector((state) => state.todos)
    console.log(todos);
    const dispatch = useDispatch();

    let handleDelete = (id) => {
        console.log("Delete",id);
        dispatch(deleteTodo(id))
    }

    return(
        <div>
            <AddForm />
            <br />
            <h3>Todo List :</h3>
            <ul>
                {todos.map((todo)=> (
                    <li key={todo.id}>{todo.task} 
                    <button onClick={() => handleDelete(todo.id)}>Delete</button> </li>
                    
                ))}
            </ul>

        </div>
    );
}