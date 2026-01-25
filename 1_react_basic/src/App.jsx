import "./App.css"
import {Author} from "./Author.jsx";

function Title() {
    return <h1>Hello World! this side Mihir</h1>
}

function Description() {
    return <p>This is the description rendering</p>
}

function App() {  // App function is itself the app component   
    return (        // only one root element could be returned at a time
        <div>
            <Title></Title>
            <Description />
            <Description />
            <Author/>
            <h3>So lets Go!!</h3>
        </div>
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

