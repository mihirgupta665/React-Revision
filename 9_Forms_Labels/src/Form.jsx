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
                <input type="text" placeholder="Enter your name..." value={fullName} onChange={handleNameChange} />
                <button>Submit</button>
            </form>
        </>
    );
}