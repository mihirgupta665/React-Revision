/*
Redux : State Management Library for JS Apps and is build for the larger, more complex applications
redux toolkit is the official recommendation for writing redux code
store : is a centralized storw which holds the whole(all) state tree and could be accessed by all component
reduces : are function to manipulate the states that take the current state and an action as arguments, and return a new state result .
In other words : (state, action) => newState
Action : It is a plain JavaScript object that has a type field. (like events)
slice : Collection of Redux reducer logic and actions for a single feature in application typically defined     together in a single life

npm install react-redux
*/

import { configureStore } from '@reduxjs/toolkit' 

export const store = configureStore({
    reducer: {}
})

