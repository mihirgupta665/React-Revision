import "./Prototype.css"

// except string everything is written inside curly braces
// default values to the props could also be given
// object is not printed as whole it is printed with keys only  and list with index number
// in react array could have html element also as their values

//conditionals should be applied as directly in ternary operator inside curply braces to render something in specific conditions, if true element should be created else null shoud be returned maintaining the DOM

function Prototype({title, price, list1=["Technology"], features={name:"Mihir", age:21}}){
    return (
        <div className="Prototype">
            <h3>The Product is : {title}</h3>
            <p>The Price for the product is : {price}</p>
            <h5>List : {list1}</h5>
            <h6>Featured by : {features.name} of {features.age}</h6>  
            {price > 70000 ? <p>Discount will be applied of 5%</p> : null}
            {/* price>70000 && <p>Discount will be applied of 5%</p> :  && could also be used for conditionals*/}

        </div>
    );
}

export default Prototype;