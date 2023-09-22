import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasklist from "./components/Tasklist";

function App() {
    //usestate updated to reflect localstorage, so don't need useeffect
    const [allTodos, setAllTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    ); // get things from local storage here when initializing state
    const [title, setTitle] = useState("");

    //useEffect to fix asynchronis problem
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(allTodos));
    }, [allTodos]);

    const handleTitleText = (e) => setTitle(e.target.value);

    return (
        <>
            <div className="container-fluid text-center bg-primary-subtle min-vh-100 p-4">
                <Header />
                <Tasklist
                    title={title}
                    setTitle={setTitle}
                    handleTitleText={handleTitleText}
                    allTodos={allTodos}
                    setAllTodos={setAllTodos}
                />
            </div>
        </>
    );
}

export default App;
