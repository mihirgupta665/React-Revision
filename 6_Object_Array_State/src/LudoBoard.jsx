import {useState} from "react";

export default function LudoBoard(){
    // we can create a object whose key will be be the state variables
    // changes in key value in object and index value in array does no cause change in object or array as whole or address of their. therefor react is not able to detect the change for re-rendering of the UI
    // Conclusively : to change in object or array we could use the spread operator to pass the copy thereby changing thier respective address
    let [moves, setMoves] = useState({blue: 0, red: 0, green: 0, yellow: 0});
    let [arr, setArr] = useState(["No Moves"]);
    let updateBlue = () => {
        // moves.blue +=1;
        console.log(moves);
        // after spread we could change the value of desired key, and use call back whenever we update new value which depend on old prev value
        // parameter of the call back is th past value of the that state variable
        // updation in object with spread(written in curly braces) could be done by writing the key and then it value
        setMoves((prevMoves) => {
            return {...prevMoves, blue: prevMoves.blue+1}
        });
        
    }
    let updateYellow = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow+1}
        })

        // Array also need to be spread so that a copy could be a passed in setState due to which re-rendering of the UI could take place
        // for updation in  spread(for array written in square brackets) directly a vlaue could be mentioned which will be push into the array
        setArr((prevArr) => {
            return [...prevArr, "Yellow, "]
        })
    }
    let updateRed = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red+1};
        })
    }
    let updateGreen = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.green+1};
        })
    }

    return(
        <div>
            <p>This is a Ludo Game</p>
            <p>Moves = {arr}</p>
            <div className="board">
                <p>Blue Moves = {moves.blue}</p>
                <button style={{backgroundColor: "aqua"}} onClick={updateBlue}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}