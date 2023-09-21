function EditForm({ currentTitle, setCurrentTitle, toggleEditing }) {
    return (
        <div className="input-group">
            <input
                type="text"
                className="form-control"
                value={currentTitle}
                onChange={(e) => setCurrentTitle(e.target.value)}
            />
            <button
                type="submit"
                className="btn btn-success"
                onClick={toggleEditing}
            >
                Confirm
            </button>
            <button
                type="submit"
                className="btn btn-danger"
                onClick={toggleEditing}
            >
                Cancel
            </button>
        </div>
    );
}
export default EditForm;
