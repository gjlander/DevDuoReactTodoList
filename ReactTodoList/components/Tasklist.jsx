import { useState } from "react";
import AddNewTodo from "./AddNewTodo";
import TodoItem from "./TodoItem";
function Tasklist({ title, setTitle, handleTitleText, allTodos, setAllTodos }) {
    const [editing, setEditing] = useState(false);

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
                <ul className="list-group bg-light h-100 taskList">
                    {allTodos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            allTodos={allTodos}
                            setAllTodos={setAllTodos}
                            editing={editing}
                            setEditing={setEditing}
                            handleTitleText={handleTitleText}
                        />
                    ))}
                    {/* <TodoItem
                        title={title}
                        setTitle={setTitle}
                        allTodos={allTodos}
                        setAllTodos={setAllTodos}
                        editing={editing}
                        setEditing={setEditing}
                    /> */}
                </ul>
            </div>
        </div>
    );
}
export default Tasklist;
