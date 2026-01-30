import { useState, useEffect } from "react";

export default function Counter(){

    let [count, setCount] = useState(0);

/*
    UseEffect(function, dependencies) : use effect hook lets you perform side effect in function components
    whenever the components reders this its function gets executed
*/
    useEffect(function printSomething(){
        console.log("Hi i am a rendering side-effect");
    })

    let incCount = () => {
        setCount((currCount) => (
            currCount+1
        ))
    }

    return (
        <div>
            <h4>Counter = {count}</h4>
            <button onClick={incCount}>count +1</button>
        </div>
    );
}