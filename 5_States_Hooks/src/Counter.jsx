import { useState } from "react";

/*
State in React :
The State is a built-in React object that is used to contain data or information about the component.
A component's state can change over time; whenever it changes, the component re-renders
*/

// Hooks : allow to use state and other class react features without writing a class

/*
useState()
    use State is a react hook that lets you add a state variable to your component
    const [state, setState] = useState(initialState);
    useState returns an array with exactly two values:
    i> The current State converts a variable to be a state variable. During the first render it will match the initialState passed and assigns its value to the variable
    ii> The set function that lets the updation of the state variable and then trigger re-rendering

*/

export default function Counter(){
    
    let [count, setCount] = useState(0);

    let incCount = () => {
        setCount(count+1);  // after updation it re renders the UI
        console.log(count);
    }

    return(
        <>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </>
    );
}