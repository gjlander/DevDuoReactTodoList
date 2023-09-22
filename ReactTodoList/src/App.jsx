import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasklist from "./components/Tasklist";

function App() {
    const [tasklists, setTasklists] = useState([]);
    const [tasklistName, setTasklistName] = useState("");
    const [allTodos, setAllTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );

    useEffect(() => {
        allTodos.length
            ? localStorage.setItem("todos", JSON.stringify(allTodos))
            : localStorage.removeItem("todos");
    }, [allTodos]);

    return (
        <>
            <div className="container-fluid text-center bg-primary-subtle min-vh-100 p-4">
                <Header
                    tasklists={tasklists}
                    setTasklists={setTasklists}
                    tasklistName={tasklistName}
                    setTasklistName={setTasklistName}
                />
                <Tasklist allTodos={allTodos} setAllTodos={setAllTodos} />
            </div>
        </>
    );
}

export default App;
