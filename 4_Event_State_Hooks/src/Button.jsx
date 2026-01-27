
function printHello() {
    console.log("Hello! I was clicked!!");
}

function printBye() {
    console.log("Byeeee!!!");
}

// onClick could be assigned to any html element for tiggering a task whenever a clicked is made

export default function Button(){
    return(
        <div>
            <button  onClick={printHello}>Click me!</button>
            <br />
            <p onClick={printBye}>Hi! there i am a para!!</p>
        </div>
    );
}