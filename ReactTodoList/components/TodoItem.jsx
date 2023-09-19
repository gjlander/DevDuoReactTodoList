import EditForm from "./EditForm";

function TodoItem() {
    const displayOn = "d-flex me-auto";
    const displayOff = "d-none me-auto";
    function editBtnHandler() {}
    return (
        <li
            className="list-group-item
            d-flex
            justify-content-between
            align-items-center
            gap-1"
        >
            <div className={displayOn}>
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
