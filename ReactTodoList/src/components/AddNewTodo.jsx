function AddNewTodo({
    title,
    setTitle,
    // allTodos,
    // setAllTodos,
    setTasklists,
    id,
}) {
    const handleTitleText = (e) => setTitle(e.target.value);

    //updated to use tasklist, but still depended on allTodos-but this worked with them all synced up
    //oh but wait, this is where the logic broke down-listId was undefined
    // const handleNewTodoSubmit = (e) => {
    //     e.preventDefault();
    //     if (!title) return;
    //     const newAllTodos = [
    //         ...allTodos,
    //         {
    //             title,
    //             done: false,
    //             id: crypto.randomUUID(),
    //         },
    //     ];
    //     setAllTodos(newAllTodos);
    //     setTasklists((prev) =>
    //         prev.map((tasklist) =>
    //             tasklist.id === listId
    //                 ? { ...tasklist, items: [...newAllTodos] }
    //                 : tasklist
    //         )
    //     );
    //     setTitle("");
    // };

    const handleNewTodoSubmit = (e) => {
        e.preventDefault();
        if (!title) return;

        const newAllTodos = [
            ...allTodos,
            {
                title,
                done: false,
                id: crypto.randomUUID(),
            },
        ];
        setAllTodos(newAllTodos);
        setTasklists((prev) =>
            prev.map((tasklist) =>
                tasklist.id === id
                    ? { ...tasklist, items: [...newAllTodos] }
                    : tasklist
            )
        );
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
