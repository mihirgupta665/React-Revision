import "./App.css"
import Counter from "./Counter.jsx";
import LikeButton fomr "./LikeButton.jsx"

// Hooks : allow to use state and other class react features without writing a class

export default function App(){
    return(
        <>
            <h1>Let's Go For States</h1>
            <Counter />
        </>
    );
}