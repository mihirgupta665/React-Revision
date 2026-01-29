import "./App.css";
import Lottery from "./Lottery.jsx";
import {sum} from "./helper.js";

export default function App(){

    // let winCondition = (ticket) => {
    //     return sum(ticket) === 15;
    // }

    let winCondition = (ticket) => {
        return ticket.every((num) => num === ticket[0]);        // return true only if all values satisfy te condition
    }

    // let winCondition = (ticket) => {
    //     return ticket[0]===0;
    // }

    // setState could be passed as prop inform of a function

    return (
        <>
            <Lottery n={2} winCondition={winCondition}/>
        </>
    );
}