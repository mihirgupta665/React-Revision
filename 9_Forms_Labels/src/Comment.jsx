import { useState } from "react";
import "./comment.css";
import CommentForm from "./CommentForm.jsx";

export default function Comment() {

    let [comments, setComments] = useState([{
        username: "mihir",
        remark: "yes this is the nice comment",
        rating: 5
    }]);

    let addNewComment = (comment) => {
        setComments((currComment) => {
            return [...currComment, comment];
        })
        // console.log(comments);
    }

    return (
        <div>
            <h4>All comments</h4>
            { console.log(comments) }
            {
                comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                        <span>Review = {comment.remark} </span>
                        <br />
                        <span>Rating = {comment.rating} </span>
                        <p>Author = {comment.username}</p>
                    </div>
                ))
            }
            
            <hr />
            <CommentForm addNewComment={addNewComment} />
        </div>
    );
}