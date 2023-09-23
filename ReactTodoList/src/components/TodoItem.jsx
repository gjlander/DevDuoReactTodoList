import { useState } from "react";
import EditForm from "./EditForm";

function TodoItem({ id, done, title, setAllTodos, hideDone }) {
    const [editing, setEditing] = useState(false);

    const toggleEditing = () => {
        setEditing((prev) => !prev);
    };

    const toggleDone = () => {
        setAllTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };
    const deleteTodo = () => {
        //iterates through allTodos and filters the one that has id that matches the id of this todo
        setAllTodos((prev) => prev.filter((todo) => todo.id !== id));
    };
    return (
        <li
            className={`list-group-item
            d-flex
            justify-content-between
            align-items-center
            gap-1 ${hideDone && done && "d-none"}`}
        >
            {!editing ? (
                <>
                    <div className="d-flex me-auto gap-2">
                        <input
                            type="checkbox"
                            checked={done}
                            onClick={toggleDone}
                            id={id}
                        />
                        <label
                            className={`form-check-label todoText ${
                                done && "text-decoration-line-through"
                            }`}
                            htmlFor={id}
                        >
                            {title}
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success"
                        onClick={toggleEditing}
                    >
                        Edit
                    </button>
                    <button
                        type="submit"
                        className="btn btn-danger"
                        onClick={deleteTodo}
                    >
                        Delete
                    </button>
                </>
            ) : (
                <EditForm
                    todoId={id}
                    todoTitle={title}
                    setAllTodos={setAllTodos}
                    // currentTitle={currentTitle}
                    // setCurrentTitle={setCurrentTitle}
                    toggleEditing={toggleEditing}
                />
            )}
        </li>
    );
}
export default TodoItem;
