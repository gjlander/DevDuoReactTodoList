import { useState } from "react";
import EditForm from "./EditForm";
function TodoItem({
    id,
    done,
    title,
    items,
    setTasklists,
    listid,
    //setAllTodos,
}) {
    const [editing, setEditing] = useState(false);
    //idea to grab easier reference to items-resync like I did with Editform
    //think I need a different solution-the async is making my functionalities inconsistent
    const [currentItems, setCurrentItems] = useState(items);
    const toggleEditing = () => {
        setEditing((prev) => !prev);
    };

    const toggleDone = () => {
        setCurrentItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, done: !item.done } : item
            )
        );
        setTasklists((prev) =>
            prev.map((tasklist) =>
                tasklist.listid === listid
                    ? { tasklist, items: currentItems }
                    : tasklist
            )
        );
    };
    const deleteTodo = () => {
        //not sure how to update this without using local useState
        setCurrentItems((prev) => prev.filter((item) => item.id !== id));
        setTasklists((prev) =>
            prev.map((tasklist) =>
                tasklist.listid === listid
                    ? { ...tasklist, items: currentItems }
                    : tasklist
            )
        );
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
                    toggleEditing={toggleEditing}
                    currentItems={currentItems}
                    setCurrentItems={setCurrentItems}
                    setTasklists={setTasklists}
                    listid={listid}
                />
            )}
        </li>
    );
}
export default TodoItem;
