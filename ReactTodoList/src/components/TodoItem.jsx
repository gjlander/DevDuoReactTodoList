import { useState } from "react";
import EditForm from "./EditForm";
//this is what I mean, simply passing id here gave a reference to the id of the current todoitem-why didn't that work for the tasklist id?
function TodoItem({
    id,
    done,
    title,
    hideDone,
    items,
    setTasklists,
    listid,
    //setAllTodos,
}) {
    const [editing, setEditing] = useState(false);
    //idea to grab easier reference to items-resync like I did with Editform-badly written-breaks the page
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
        //old verion
        // setTasklists((prev) => prev.filter((todo) => todo.id !== id));

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
            className={`list-group-item
            d-flex
            justify-content-between
            align-items-center
            gap-1 ${done && hideDone && "d-none"}`}
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
                    // setAllTodos={setAllTodos}
                />
            )}
        </li>
    );
}
export default TodoItem;
