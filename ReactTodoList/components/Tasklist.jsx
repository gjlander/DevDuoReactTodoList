import { useState } from "react";
import TodoItem from "./TodoItem";
function Tasklist() {
    const [editing, setEditing] = useState(false);
    return (
        <div className="row justify-content-center">
            <div className="col col-lg-6">
                <h2 className="display-6">Tasks</h2>
                <ul className="list-group bg-light h-100 taskList">
                    <TodoItem editing={editing} setEditing={setEditing} />
                </ul>
            </div>
        </div>
    );
}
export default Tasklist;
