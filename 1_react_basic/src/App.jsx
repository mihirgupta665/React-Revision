/*
Writing Markup Rules of JSX: 
i> one root element could only be returned
ii> all tags must be closed
iii> use Camel case most of the time
*/

// Curly braces in JSX becomes the window for JS, everycode in curly braces it treated as pure JS

import "./App.css"
import {Author} from "./Author.jsx";
import ProductTab from "./ProductTab.jsx";

function Title() {
    return <h1>Hello World! this side Mihir</h1>
}

function Description() {
    return <p>This is the description rendering</p>
}

function App() {  // App function is itself the app component   
    let name = "Master Mihir"
    return (        // only one root element could be returned at a time
        // <> </> is the React fragment use to wrap multiple elements with out creating a separate new node
        <>  
            <Title></Title>
            <Description />
            <Description />
            <Author/>
            <h3>So lets Go!!</h3>
            { name.toUpperCase() }    
            <ProductTab></ProductTab> 
            <ProductTab></ProductTab> 
        </>
    );   // whatever is returned becomes the visible UI of the page

}

export default App
// there are two ways of rendering <title></title> or <title/>

// default import export : use to export only one value
// export default Title;
// import name from "./filename.jsx";

// named import export : used when multiple values needed to be exported
// export { name... };
// import { name } from "./file_name.jsx";

// Porps are the information that you pass to a JSX tag which alters the output UI component rendering.
// props in argument is a object with title-value pair as the key-value pair. If printed a in console in strict mode everything is printed twice (2 times).
// {name_attributes...} Destructuring of Props could also be done in the parameter to directly use the prop container.


