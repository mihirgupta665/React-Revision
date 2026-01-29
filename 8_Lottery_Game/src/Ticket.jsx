import TicketNum from "./TicketNum.jsx";
import "./Ticket.css";

export default function Ticket({ticket}) {
    return (
        <div className="ticket">
            <p>Your Ticket</p>
            {/* wherever use map please add key for identification of each element of maps list */}
            {ticket.map((num, idx) => (
                <TicketNum num={num} key={idx} />
            ))}
        </div>
    );
}