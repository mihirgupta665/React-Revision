import { useState } from "react";

export default function Comment(){

    let [comments, setComment] = useState([{
        username: "mihir",
        remark: "yes this is the nice comment",
        rating: 5
    }]);

    return(
        <div>
            <h4>All comments</h4>
            <div className="comment">
                <span>Review = {comments[0].remark} </span>
                <br />
                <span>Rating = {comments[0].rating} </span>
                <br />
                <p>Author = {comments[0].username}</p>
            </div>
        </div>
    );
}