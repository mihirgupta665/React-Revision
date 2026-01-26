import Prototype from "./Prototype.jsx"
// conditionals : adding elements based on some condition

function PrototypeTab() {
    let list1 = [<li>"Hi-tech"</li>, <li>"Durable"</li>, <li>"Expensive"</li>];
    // or could use map function to change a normal array to html containing element array
    // list2 = list1.map( (element)=> <li>element</li> )   // this changes original element to html element
    return (
        <>
            <Prototype title="Laptop" price={150000} list1={list1} features={{name:"Mihir", age:21}} />
            <Prototype title="Mobile" price={64000} />
            <Prototype title="Tablet" price={30000} />
        </>
    );
}

export default PrototypeTab;