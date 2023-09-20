import EditForm from "./EditForm";

function TodoItem({ editing, setEditing }) {
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
                    <div className="d-flex me-auto">
                        <input type="checkbox" />
                        <label className="form-check-label todoText"></label>
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
                <EditForm toggleEditing={toggleEditing} />
            )}
        </li>
    );
}
export default TodoItem;
