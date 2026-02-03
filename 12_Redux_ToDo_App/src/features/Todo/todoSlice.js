// Slice is the bundle of reducers and actions together
// Redux Toolkit lets you write simpler immutable update logic using "mutating" syntax.

// nanoid generates a unique id 
import { createSlice, nanoid } from '@reduxjs/toolkit';

// Initializing State of the store
const initialState = {
    todos: [{id:"abc", task:"demo-task", isDone:false}],
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    // action has generally compulsorily 2 things type and payload
    // reducers are object which contains function as property
    reducers: {     //each function needs two parameters State and Action (State,Action) => {updates the states}
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(), 
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo);  // direct mutation
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter( (todo) => todo.id!==action.payload );
        },
        markAsDone: (state, action) => {
            state.todos = state.todos.map( (todo) => {
                if(todo.id===action.payload){
                    todo.isDone = true;
                }
            });
        },
    },
});

//Action creators are generated for each case reducer function 
//Action creators are function that create action objects
export const { addTodo, deleteTodo, markAsDone} = todoSlice.actions;

export default todoSlice.reducer;