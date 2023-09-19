function EditForm() {
    return (
        <div className="input-group">
            <input type="text" className="form-control" />
            <button type="submit" className="btn btn-success">
                Confirm
            </button>
            <button type="submit" className="btn btn-danger">
                Cancel
            </button>
        </div>
    );
}
export default EditForm;