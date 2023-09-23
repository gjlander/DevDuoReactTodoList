function AddNewTodo({
    title,
    setTitle,
    // allTodos,
    // setAllTodos,
    setTasklists,
    tasklists,
    listid,
}) {
    const handleTitleText = (e) => setTitle(e.target.value);

    //just for reference here is the original function that works in main with one list
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
    //     setTitle("");
    // };

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

        //one idea of how to reference the tasklist I want to edit
        //id is still undefined-how to I get access to the id property of the tasklist?
        //when Lilian did it with allTodos she just passed 'id'- I'm not 100% sure how that worked
        const currentTasklist = tasklists.filter(
            (tasklist) => tasklist.listid === listid
        );

        //update the items array of objects, which contains the todo items
        const updatedItems = [
            ...currentTasklist.items,
            {
                title,
                done: false,
                id: crypto.randomUUID(),
            },
        ];
        //update tasklists array-which also requires I access the id property
        setTasklists((prev) =>
            prev.map((tasklist) =>
                tasklist.listid === listid
                    ? { ...tasklist, items: [...updatedItems] }
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
