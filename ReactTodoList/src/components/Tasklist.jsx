import { useState } from "react";
import AddNewTodo from "./AddNewTodo";
import TodoItem from "./TodoItem";
function Tasklist({ title, setTitle, handleTitleText, allTodos, setAllTodos }) {
    const [hideDone, setHideDone] = useState(false);
    const toggleHideDone = () => {
        setHideDone((prev) => !prev);
    };
    return (
        <div className="row justify-content-center">
            <div className="col col-lg-6">
                <h2 className="display-6">Tasks</h2>
                <AddNewTodo
                    title={title}
                    setTitle={setTitle}
                    handleTitleText={handleTitleText}
                    allTodos={allTodos}
                    setAllTodos={setAllTodos}
                />
                <input
                    type="checkbox"
                    // checked={hideDone}
                    onClick={toggleHideDone}
                    id="hideDoneBtn"
                />{" "}
                <label htmlFor="hideDoneBtn">Hide Done</label>
                <ul className="list-group bg-light h-100 taskList">
                    {allTodos &&
                        allTodos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                {...todo}
                                allTodos={allTodos}
                                setAllTodos={setAllTodos}
                                hideDone={hideDone}
                            />
                        ))}
                </ul>
            </div>
        </div>
    );
}
export default Tasklist;
