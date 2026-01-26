// props are passed in curly braces for JS window
// style attributes take object inside JS window so two curly braces

export default function MsgBox({UserName, TextColor}){
    
    return (
        <h1 className="TextColor" style={{color:TextColor}}>Welcome, {UserName}</h1>
    );
}