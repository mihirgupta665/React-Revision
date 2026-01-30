import { useState } from "react";

export default function CommentForm({addNewComment}) {

    let [formData, setFormData] = useState({
        username: "",
        remark: "",
        rating: 5
    })

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        addNewComment(formData); 
        setFormData({
            username: "",
            remark: "",
            rating: 5
        })
    }

    return (
        <div>
            <h2>Comment Form</h2>
            <br />
            <form onSubmit={ handleSubmit }>
                <label htmlFor="username">Username : </label>
                <input id="username" name="username" type="text" placeholder="Enter your Username..." value={formData.username} onChange={handleInputChange} />
                <br />
                <br />

                <label htmlFor="remark">Remark : </label>
                <textarea id="ramark" name="remark" placeholder="Write your Review..." value={formData.remark} onChange={handleInputChange} ></textarea>
                <br />
                <br />

                <label htmlFor="rating">Rating : </label>
                <input id="rating" name="rating" type="number" placeholder="Rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} />
                <br />
                <br />

                <button>Submit</button>
            </form>

        </div>
    );
}