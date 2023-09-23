function AddNewTodo({
    title,
    setTitle,
    allTodos,
    setAllTodos,
    setTasklists,
    // tasklists,
    listid,
}) {
    const handleTitleText = (e) => setTitle(e.target.value);
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
            prev.map((tasklist) => {
                console.log(tasklist.id);
                tasklist.id === listid
                    ? { ...tasklist, items: [...newAllTodos] }
                    : tasklist;
            })
        );
        // const currentTasklist = tasklists.filter(
        //     (tasklist) => tasklist.id === listid
        // );

        // const newItems = [
        //     ...currentTasklist.items,
        //     { title, done: false, id: crypto.randomUUID() },
        // ];
        // console.log("currentTasklist", currentTasklist);
        // console.log("newItems", newItems);
        // setTasklists((prev) =>
        //     prev.map((tasklist) => {
        //         tasklist.id === listid
        //             ? { ...tasklist, items: [...newItems] }
        //             : tasklist;
        //     })
        // );
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
