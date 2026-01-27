
function handleClick() {
    console.log("Hello! I was clicked!!");
}

function handleMouseOver() {
    console.log("Byeeee!!!");
}

function handleDblClick(){
    console.log("Yippey! I was clicked Twice!!");
}

// generaly different events are attached with "on" for event handling and name to the function is given by handleEvent
// For eg: to handle "click" event we have attribute "onClick" and name of function might be "handleClick"
// only reference of the function should be given, function should not be executed (don't write "()" at last) otherwise function will be executed when page loads and will not tigger when needed
// onClick could be assigned to any html element for tiggering a task whenever a clicked is made
// onMouseOver is used for hover with mouse

export default function Button(){
    return(
        <div>
            <button  onClick={handleClick}>Click me!</button>
            <br />
            <p onMouseOver={handleMouseOver}>Hi! there i am a para!!</p> 
            <br />
            <button onDoubleClick={handleDblClick}>Double Click Me!</button>
            <br />
            
        </div>
    );
}