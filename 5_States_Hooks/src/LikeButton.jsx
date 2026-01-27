import { useState } from "react";

// hooks  can not be created outside the function components
// multiples state hooks could be created in side one component

// Closure : A closure is a feature in JS where an inner function always has an access to the outer (enclosing) function's variables (gets preserved)
export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let [clicks, setClicks] = useState(0);
    let styles = { color: "red" };
    let toggleLike = () => {
        setIsLiked(!isLiked);
        setClicks(clicks+1);
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