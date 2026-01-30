// Standard way with form is to use controlled components. So we make the React State to be the "single source of truth"
// formik: npm install formik -> used for creating validation in react forms
// formik handles :  input change, onsubmit, state, and most importantly validation

import "./App.css";
import Form from "./Form.jsx";
import CommentForm from "./CommentForm.jsx";
import Comment from "./Comment.jsx";

export default function App(){
    return(
        <>
            <h1>Forms in React</h1>
            <Form />
            <br />
            <br />
            <hr />
            <br />
            <Comment />
        </>
    );
}


