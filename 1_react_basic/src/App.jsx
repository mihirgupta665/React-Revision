import "./App.css"

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
            <h3>So lets Go!!</h3>
        </div>
    );   // whatever is returned becomes the visible UI of the page

}

export default App
// there are two ways of rendering <title></title> or <title/>