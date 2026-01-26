import Prototype from "./Prototype.jsx"
function PrototypeTab() {
    let list1 = ["Hi-tech", "Durable", "Expensive"];
    return (
        <>
            <Prototype title="Laptop" price={150000} list1={list1} features={{name:"Mihir", age:21}} />
            <Prototype title="Mobile" price={64000} />
            <Prototype title="Tablet" price={30000} />
        </>
    );
}

export default PrototypeTab;