function TodoItem() {
    return (
        <li
            className="list-group-item
            d-flex
            justify-content-between
            align-items-center
            gap-1"
        >
            <div className="d-flex me-auto">
                <input type="checkbox" />
                <label className="form-check-label todoText"></label>
            </div>
            <button type="submit" className="btn btn-success">
                Edit
            </button>
            <button type="submit" className="btn btn-danger">
                Delete
            </button>
        </li>
    );
}
export default TodoItem;
