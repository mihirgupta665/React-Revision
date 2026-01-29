import { useState } from "react";
// import "./Lottery.css";
import { genTicket } from "./helper.js";
import Ticket from "./Ticket.jsx";
import Button from "./Button.jsx"; 

// Lifting State Up :  when two components needs to be change together then remove state from both and assign the state to their closest parent and pass those state to them using props
// whenever writing a component : always decide it design by three major things: i> props, ii> state, iii> events

export default function Lottery({n=3, winCondition}){

    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);
    // console.log(isWinning)
    let buyTicket = () => {
        setTicket(genTicket(n));
    }

    return(
        <>
            <h1>This is the Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <br />
            <br />
            <Button action={buyTicket}/>
            <br />
            <br />
            <h3>{isWinning && "Congratulation You won a Magnificent Lottery"}</h3>
        </>
    );
}