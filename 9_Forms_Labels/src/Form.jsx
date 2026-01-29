import { useState } from "react";

export default function Form() {
    let [fullName, setFullName] = useState("");
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