function EditForm({ currentTitle, setCurrentTitle, toggleEditing }) {
    return (
        <form
            className="input-group"
            onSubmit={(e) => {
                e.preventDefault();
                toggleEditing();
            }}
        >
            <input
                type="text"
                className="form-control"
                value={currentTitle}
                onChange={(e) => setCurrentTitle(e.target.value)}
            />
            <button
                type="submit"
                className="btn btn-success"
                // onClick={toggleEditing}
            >
                Confirm
            </button>
            <button
                type="submit"
                className="btn btn-danger"
                // onClick={toggleEditing}
            >
                Cancel
            </button>
        </form>
    );
}
export default EditForm;
