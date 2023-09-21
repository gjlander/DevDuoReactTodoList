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
        // is always one item behind because asyncronis code. how to fix?
        localStorage.setItem("todos", JSON.stringify(allTodos));
        setTitle("");
    };
    return (
        <form
            className="input-group mb-3"
            onSubmit={(e) => {
                handleNewTodoSubmit(e);
            }}
        >
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
