import { useState } from "react";

// hooks  can not be created outside the function components
// multiples state hooks could be created in side one component

// Closure : A closure is a feature in JS where an inner function always has an access to the outer (enclosing) function's variables (gets preserved)
// functions runs and execute first then the entire re-rendering of the functional components takes place.

// to change a value of same state more than once use call back if the state is dependent on the previous state, currCount stores the value of the state valriable in call back

let init = () => {
    console.log("Initialising");
    return 0;
}

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    
    // reference of the initial function (not execution) should be passed, otherwise initialization function will be executed each time the state changes and UI re-renders.
    let [clicks, setClicks] = useState(init);   
    let styles = { color: "red" };
    let toggleLike = () => {
        setIsLiked(!isLiked);
        // currCount is the value of the curr state variable
        setClicks((currCount) => {
            return currCount+1;
        });
        setClicks((currCount) => {
            return currCount+1;
        });
        console.log(clicks);    // number is not updated because the updation take place one re-rendering takes place
    }
    return (
        <div>
            <p>Clicks = {clicks}</p>
            <p onClick={toggleLike}>
                {/* {isLiked.toString()} */}
                {isLiked ? <i className="fa-solid fa-heart" style={styles} ></i> : <i className="fa-regular fa-heart"></i>}
                
            </p>
        </div>
    );
}