import EditForm from "./EditForm";

function TodoItem({ title, editing, setEditing, handleTitleText }) {
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
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </>
            ) : (
                <EditForm
                    title={title}
                    toggleEditing={toggleEditing}
                    handleTitleText={handleTitleText}
                />
            )}
        </li>
    );
}
export default TodoItem;
