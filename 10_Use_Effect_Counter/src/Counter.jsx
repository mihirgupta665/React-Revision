import { useState, useEffect } from "react";

export default function Counter(){

    let [count, setCount] = useState(0);

/*
    UseEffect(function, dependencies) : use effect hook lets you perform side effect in function components
    whenever the dependencies(array of state variable) state changes which means specific components re-renders then this specified function gets executed
*/
    useEffect(function printSomething(){
        console.log("Hi i am a rendering side-effect");
    })

    let incCount = () => {
        // empty array dependencies means that for all state only once for the first time use effect will execute its function
        setCount((currCount) => (
            currCount+1
        ), [])
    }

    return (
        <div>
            <h4>Counter = {count}</h4>
            <button onClick={incCount}>count +1</button>
        </div>
    );
}