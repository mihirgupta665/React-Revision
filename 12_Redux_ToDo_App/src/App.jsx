import "./App.css"
import Todo from "./components/Todo.jsx";
import { Provider } from "react-redux"; // passes the store to all its components
import { store } from "./App/store.js"

export default function App() {
    return (
        <>
            {/* Provider passed store to its components (so they can directly access the store)*/}
            <Provider store={store}>
                <Todo />
            </Provider>
        </>
    );
}