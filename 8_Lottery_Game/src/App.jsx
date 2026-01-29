import "./App.css";
import Lottery from "./Lottery.jsx";


export default function App(){
    return (
        <>
            <Lottery n={2} winningSum={10}/>
        </>
    );
}