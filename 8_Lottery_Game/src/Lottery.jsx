import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper.js";

// Lifting State Up :  when two components needs to be change together then remove state from both and assign the state to their closest parent and pass those state to them using props
// whenever writing a component : always decide it design by three major things: i> props, ii> state, iii> events

export default function Lottery(){

    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;
    // console.log(isWinning)
    let buyTicket = () => {
        setTicket(genTicket(3));
    }

    return(
        <>
            <h1>This is the Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span><span>{ticket[1]}</span><span>{ticket[1]}</span>
            </div>
            <br />
            <br />
            <button onClick={buyTicket}>Buy New Ticket</button>
            <br />
            <br />
            <h3>{isWinning && "Congratulation You won a Magnificent Lottery"}</h3>
        </>
    );
}