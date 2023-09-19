import AddNewTodo from "./AddNewTodo";
function Header() {
    return (
        <div className="row justify-content-center">
            <div className="col-8">
                <h1 className="display-4 bg-primary fw-bold rounded p-3">
                    To Do List
                </h1>
                <AddNewTodo />
            </div>
        </div>
    );
}

export default Header;
