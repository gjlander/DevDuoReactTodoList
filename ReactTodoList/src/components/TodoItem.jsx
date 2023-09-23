import { useState } from "react";
import EditForm from "./EditForm";

function TodoItem({ id, done, title, setAllTodos, hideDone }) {
    const [editing, setEditing] = useState(false);
   
    const toggleEditing = () => {
        setEditing((prev) => !prev);
    };

    const onDelete = () => {
        //make a new array that filters out only the todo we want to delete
        setAllTodos((prev) => prev.filter((todo) => todo.id !== id));
    };
    const toggleDone = () => {
        setAllTodos ((prev) =>
        prev.map((todo) =>
            todo.id === id  ? {...todo, done: !done} : todo
        )
      )
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
                    <button type="submit" className="btn btn-danger" onClick={onDelete}>
                        Delete
                    </button>
                </>
            ) : (
                <EditForm
                    todoId={id}
                    todoTitle={title}
                    setAllTodos={setAllTodos}
                    toggleEditing={toggleEditing}
                />
            )}
        </li>
    );
}
export default TodoItem;
