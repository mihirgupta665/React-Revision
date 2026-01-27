export default function LikeButton(){
    let clicked = () => {
        console.log("clicked");
    }
    return(
        <div>
            <p onClick={clicked}><i className="fa-regular fa-heart"></i></p>
        </div>
    );
}