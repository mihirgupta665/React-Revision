import "./App.css";
import PrototypeTab from "./PrototypeTab.jsx";
import MsgBox from "./MsgBox.jsx";

function App(){
    return (
        <>
        <MsgBox UserName="Mihir" TextColor="Yellow" />
        <PrototypeTab/>
        <MsgBox UserName="Divyansh" TextColor="Green" />
        </>
    );
}

export default App;