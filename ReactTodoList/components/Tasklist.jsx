import TodoItem from "./TodoItem";
function Tasklist() {
    return (
        <div className="row justify-content-center">
            <div className="col col-lg-6">
                <h2 className="display-6">Tasks</h2>
                <ul className="list-group bg-light h-100 taskList">
                    <TodoItem />
                </ul>
            </div>
        </div>
    );
}
export default Tasklist;
