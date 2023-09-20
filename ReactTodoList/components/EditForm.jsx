function EditForm({ title, handleTitleText, toggleEditing }) {
    return (
        <div className="input-group">
            <input type="text" className="form-control" value={title} />
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
