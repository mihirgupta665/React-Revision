import { useState } from "react";

export default function Form() {
    // let [fullName, setFullName] = useState("");
    // let [username, setUsername] = useState("");
    let [formData, setFormData] = useState({
        fullName: "",
        username: ""
    })

    /*
    Mechanis of flow: i> input change, ii> onchange tiggers, iii> handleNameChange gets invoked,
    <iv>setFullName executes, v> fullName(state) values changes, vi> react re-renders due to state change
    */
    // let handleNameChange = (event) => {
    //     // console.log(event.target.value);
    //     setFullName(event.target.value)
    // }

    // let handleUsername = (event) => {
    //     setUsername(event.target.value);
    // }

    let handleInputChange = (event) => {
        let eventName = event.target.name;
        let eventNewValue = event.target.value;
        setFormData((currData) => {
            currData[eventName] = eventNewValue;
            return {...currData};
        })
    }


    return(
        <>
            <form>
                {/* for is an loop reserved keyword in Js therefore "htmlFor" is used to denote so */}
                <label htmlFor="fullName">Enter Name : </label>
                <input id="fullName" type="text" placeholder="Enter your name..." value={fullName} onChange={handleInputChange} name="fullName" />
                <br />
                <br />
                <label htmlFor="username">Enter Username : </label>
                <input id="username" type="text" placeholder="Enter your Username..." value={username} onChange={handleInputChange} name="username" />
                <br />  
                <br />
                <button>Submit</button>
            </form>
        </>
    );
}

// Functions as prop because function is a 1st class object. 
// This means they can be passed to a function as argument, returned from it an assigned to a variable