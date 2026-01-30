// import { useState } from "react";
import { useFormik } from "formik";

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Username could not be empty';
    }
    


    return errors;
};

export default function CommentForm({ addNewComment }) {

    // let [formData, setFormData] = useState({
    //     username: "",
    //     remark: "",
    //     rating: 5
    // })

    const formik = useFormik({
        initialValues: {
            username: "",
            remark: "",
            rating: 5
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return { ...currData, [event.target.name]: event.target.value };
    //     });
    // }

    // let handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(formData);
    //     addNewComment(formData);
    //     setFormData({
    //         username: "",
    //         remark: "",
    //         rating: 5
    //     })
    // }

    return (
        <div>
            <h2>Comment Form</h2>
            <br />
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username : </label>
                <input id="username" name="username" type="text" placeholder="Enter your Username..." value={formik.values.username} onChange={formik.handleChange} />
                <br />
                <br />
                {formik.errors.username ? <div style={{ color: "red" }}>{formik.errors.username}</div> : null}

                <label htmlFor="remark">Remark : </label>
                <textarea id="remark" name="remark" placeholder="Write your Review..." value={formik.values.remark} onChange={formik.handleChange} ></textarea>
                <br />
                <br />
                {formik.errors.remark ? <div style={{ color: "red" }}>{formik.errors.remark}</div> : null}

                <label htmlFor="rating">Rating : </label>
                <input id="rating" name="rating" type="number" placeholder="Rating" min={1} max={5} value={formik.values.rating} onChange={formik.handleChange} />
                <br />
                <br />
                {formik.errors.rating ? <div style={{color: "red"}}>{formik.errors.rating}</div> : null}

                <button type="submit">Submit</button>
            </form>

        </div>
    );
}

