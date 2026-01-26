import "./Product.css";
function Product(props){
    return (
        <div className="Product">
        <h2>Product : {props.title}</h2>
        <p>Rate of the Product is : </p>
        </div>
    );
}

export default Product;