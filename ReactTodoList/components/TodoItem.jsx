import { useState } from "react";
import EditForm from "./EditForm";

function TodoItem({ title }) {
    const [editing, setEditing] = useState(false);
    const [currentTitle, setCurrentTitle] = useState(title);

    const toggleEditing = () => {
        setEditing((prev) => !prev);
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
                        <input type="checkbox" />
                        <label className="form-check-label todoText">
                            {currentTitle}
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success"
                        onClick={toggleEditing}
                    >
                        Edit
                    </button>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </>
            ) : (
                <EditForm
                    currentTitle={currentTitle}
                    setCurrentTitle={setCurrentTitle}
                    toggleEditing={toggleEditing}
                />
            )}
        </li>
    );
}
export default TodoItem;
