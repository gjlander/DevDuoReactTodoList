import AddNewTasklist from "./AddNewTasklist";
function Header({
    allTodos,
    tasklistName,
    setTasklistName,
    tasklists,
    setTasklists,
}) {
    return (
        <div className="row justify-content-center mb-4">
            <div className="col-8 bg-primary rounded p-3">
                <h1 className="display-4 fw-bold">To Do List</h1>
                <AddNewTasklist
                    allTodos={allTodos}
                    tasklists={tasklists}
                    setTasklists={setTasklists}
                    tasklistName={tasklistName}
                    setTasklistName={setTasklistName}
                />
            </div>
        </div>
    );
}

export default Header;
