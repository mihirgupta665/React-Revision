import { useSelector } from "react-redux";  // its a function which takes a call back function and returns the state(data) of the store

// The useSelector hooks allow to extract data or the state from the redux store using a selector function. (returns the data of state)
export default function Todo(){
    const todos = useSelector((state) => state.todos)
    console.log(todos);
    return(
        <div>
            <h1>Todo List App</h1>
            <ul>
                {todos.map((todo)=> (
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>

        </div>
    );
}