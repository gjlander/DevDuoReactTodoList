function EditForm({
    currentTitle,
    setCurrentTitle,
    toggleEditing,
    todoId,
    setAllTodos,
}) {
    const updateTodos = (e) => {
        // here we find the todo in question, and update allTodos by changing the title of a single todo object
        setAllTodos((prev) =>
            prev.map((todo) =>
                todo.id === todoId ? { ...todo, title: e.target.value } : todo
            )
        );
    };
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
                onChange={updateTodos}
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
