import "./App.css";
import Lottery from "./Lottery.jsx";
import Ticket from "./Ticket.jsx";
import TicketNum from "./TicketNum.jsx";


export default function App(){
    return (
        <>
            <Ticket ticket={ [2, 4, 5] } />
        </>
    );
}