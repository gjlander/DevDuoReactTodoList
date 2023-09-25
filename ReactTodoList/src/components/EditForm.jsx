import { useState } from "react";
function EditForm({
    toggleEditing,
    todoId,
    todoTitle,
    currentItems,
    setCurrentItems,
    setTasklists,
    listid,
    // setAllTodos
}) {
    const [titleEdit, setTitleEdit] = useState(todoTitle);
    const editTodo = () => {
        // setAllTodos((prev) =>
        //     prev.map((todo) =>
        //         todo.id === todoId ? { ...todo, title: titleEdit } : todo
        //     )
        // );

        //this works but is always one edit behind-async? But why does it work on toggle done then?
        setCurrentItems((prev) =>
            prev.map((item) =>
                item.id === todoId ? { ...item, title: titleEdit } : item
            )
        );
        setTasklists((prev) =>
            prev.map((tasklist) =>
                tasklist.listid === listid
                    ? { ...tasklist, items: currentItems }
                    : tasklist
            )
        );
    };
    return (
        <form
            className="input-group"
            onSubmit={(e) => {
                e.preventDefault();
                editTodo();
                toggleEditing();
            }}
        >
            <input
                type="text"
                className="form-control"
                value={titleEdit}
                onChange={(e) => setTitleEdit(e.target.value)}
            />
            <button type="submit" className="btn btn-success">
                Confirm
            </button>
            <button
                type="button"
                className="btn btn-danger"
                onClick={toggleEditing}
            >
                Cancel
            </button>
        </form>
    );
}
export default EditForm;
