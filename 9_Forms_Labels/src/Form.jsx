import { useState } from "react";

export default function Form() {
    // let [fullName, setFullName] = useState("");
    // let [username, setUsername] = useState("");
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    })

    /*
    Mechanism of flow: i> input change, ii> onchange tiggers, iii> handleNameChange gets invoked,
    <iv>setFullName executes, v> fullName(state) values changes, vi> react re-renders due to state change
    */
    // let handleNameChange = (event) => {
    //     // console.log(event.target.value);
    //     setFullName(event.target.value)
    // }

    // let handleUsername = (event) => {
    //     setUsername(event.target.value);
    // }

    // for handle multiple input write each element name in object and change the state of object and then could create common handlers
    let handleInputChange = (event) => {
        let eventName = event.target.name;
        let eventNewValue = event.target.value;
        setFormData((currData) => {
            // change value using [] sq brakets not dot operator and sq braces are used to compute the variable and then vlaue is assgined where as dot directyl assign the value.
            // currData[eventName] = eventNewValue;
            return {...currData, [eventName] : eventNewValue};
        })
    }

    // preventDefault() : prevents the default behaviour of forms to submit the form and refresh the page
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: ""
        })
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                {/* for is an loop reserved keyword in Js therefore "htmlFor" is used to denote so */}
                <label htmlFor="fullName">Enter Name : </label>
                <input id="fullName" type="text" placeholder="Enter your name..." value={formData.fullName} onChange={handleInputChange} name="fullName" />
                <br />
                <br />
                <label htmlFor="username">Enter Username : </label>
                <input id="username" type="text" placeholder="Enter your Username..." value={formData.username} onChange={handleInputChange} name="username" />
                <br />  
                <br />
                <label htmlFor="password">Enter Password : </label>
                <input type="password" placeholder="Enter your Password..." id="password" value={formData.password} onChange={handleInputChange} name="password" />
                <br />
                <br />
                <button>Submit</button>
            </form>
        </>
    );
}

// Functions as prop because function is a 1st class object. 
// This means they can be passed to a function as argument, returned from it an assigned to a variable