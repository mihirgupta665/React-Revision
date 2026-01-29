import { useState } from "react";

export default function Form() {
    let [fullName, setFullName] = useState("");
    /*
    Mechanis of flow: i> input change, ii> onchange tiggers, iii> handleNameChange gets invoked,
    <iv>setFullName executes, v> fullName(state) values changes, vi> react re-renders due to state change
    */
    let handleNameChange = (event) => {
        // console.log(event.target.value);
        setFullName(event.target.value)
    }
    return(
        <>
            <form>
                {/* for is an loop reserved keyword in Js therefore "htmlFor" is used to denote so */}
                <label htmlFor="username">Name : </label>
                <input id="username" type="text" placeholder="Enter your name..." value={fullName} onChange={handleNameChange} />
                <button>Submit</button>
            </form>
        </>
    );
}

// Functions as prop because function is a 1st class object. 
// This means they can be passed to a function as argument, returned from it an assigned to a variable