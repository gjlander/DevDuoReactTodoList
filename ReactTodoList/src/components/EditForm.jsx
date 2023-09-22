import { useState } from "react";
function EditForm({ toggleEditing, todoId, todoTitle, setAllTodos }) {
    //doing it the dangerous async way so that the edit doesn't take place until submit
    const [titleEdit, setTitleEdit] = useState(todoTitle);
    const editTodo = () => {
        // here we find the todo in question, and update allTodos by changing the title of a single todo object
        //and sync it bck up with titleEdit
        setAllTodos((prev) =>
            prev.map((todo) =>
                todo.id === todoId ? { ...todo, title: titleEdit } : todo
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
            <button
                type="submit"
                className="btn btn-success"
                // onClick={toggleEditing}
            >
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
