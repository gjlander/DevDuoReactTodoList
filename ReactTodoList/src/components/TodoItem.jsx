import { useState } from "react";
import EditForm from "./EditForm";

function TodoItem({ id, title, setAllTodos, done }) {
    const [editing, setEditing] = useState(false);
    // const [currentTitle, setCurrentTitle] = useState(title);

    const toggleEditing = () => {
        setEditing((prev) => !prev);
    };
   
    const onDelete = () => {
        //make a new array that filters out only the todo we want to delete
        //const result = words.filter((word) => word.length > 6);
        setAllTodos((prev) =>
                prev.filter((todo) =>
                // we would return an array with one object
                    todo.id !== id 
                )
            )

    };

    // setAllTodos((prev) =>
    //         prev.map((todo) =>
    //             todo.id === id ? { ...todo, title: titleEdit } : todo
    //         )
    const toggleDone = () => {
        setAllTodos ((prev) =>
        prev.map((todo) =>
            todo.id === id  ? {...todo, done: !done} : todo
        )
    )

    };

    return (
        <li
            className="list-group-item
            d-flex
            justify-content-between
            align-items-center
            gap-1"
        >
            {!editing ? (
                <>
                    <div className="d-flex me-auto gap-2">
                        <input type="checkbox" checked={done} onClick={toggleDone} />
                        {/* if something then add text-decoration-line-through
                        but can't use if statement
                        we can use the logical &&
                        example ${condition && what we want to happen} */}
                        <label className={`form-check-label todoText ${done && "text-decoration-line-through"}`}>
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
                    // currentTitle={currentTitle}
                    // setCurrentTitle={setCurrentTitle}
                    toggleEditing={toggleEditing}
                />
            )}
        </li>
    );
}
export default TodoItem;
