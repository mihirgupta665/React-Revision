import "./Prototype.css"

function Prototype({title, price, list1=["Technology"], features={name:"Mihir", age:21}}){
    return (
        <div className="Prototype">
            <h3>The Product is : {title}</h3>
            <p>The Price for the product is : {price}</p>
            <h5>List : {list1}</h5>
            <h6>Featured by : {features.name} of {features.age}</h6>
        </div>
    );
}

export default Prototype;