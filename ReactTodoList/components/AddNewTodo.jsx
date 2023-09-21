function AddNewTodo({
    title,
    setTitle,
    handleTitleText,
    allTodos,
    setAllTodos,
}) {
    const handleNewTodoSubmit = (e) => {
        e.preventDefault();
        if (!title) return;
        const newAllTodos = [
            ...allTodos,
            {
                id: crypto.randomUUID(),
                title,
                done: false,
            },
        ];
        setAllTodos(newAllTodos);
        setTitle("");
    };
    return (
        <form className="input-group mb-3" onSubmit={handleNewTodoSubmit}>
            <input
                type="text"
                className="form-control"
                id="textForNewTodo"
                placeholder="Add a new task..."
                aria-label="Add a new task..."
                aria-describedby="button-addon2"
                onChange={handleTitleText}
                value={title}
            />
            <button className="btn btn-primary" type="submit" id="newItemBtn">
                Add
            </button>
        </form>
    );
}
export default AddNewTodo;
