//Form Default Behaviour is that it moves to the new page or refresh the old page. (every event has some dafault properties)
// Any button in the form is by default a submit button

function handleFormSubmit(event){
    console.log("form was Sucessfully Submitted");
    event.preventDefault();     // stops the default behaviour of the Form event of submit.
}

export default function Form() {
    return (
        <>
            <hr />
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Write Something" />
                <button>Submit</button>
            </form>
        </>
    );
}