import { useState } from "react";
import Header from "../components/Header";
import Tasklist from "../components/Tasklist";

function App() {
    const [allTodos, setAllTodos] = useState([]);
    const [title, setTitle] = useState("");

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
