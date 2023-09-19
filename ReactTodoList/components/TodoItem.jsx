export default function TodoItem() {
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
                <label htmlFor="" className="form-check-label todoText"></label>
            </div>
        </li>
    );
}
