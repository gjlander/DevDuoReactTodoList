import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddNewTodo from "./AddNewTodo";
import TodoItem from "./TodoItem";
function Tasklist({
    // allTodos, setAllTodos,
    setTasklists,
    tasklists,
}) {
    const [title, setTitle] = useState("");
    const [hideDone, setHideDone] = useState(false);
    const toggleHideDone = () => {
        setHideDone((prev) => !prev);
    };

    return (
        <div className="row justify-content-center">
            <div className="col col-lg-6">
                <Tabs>
                    <TabList>
                        {tasklists.map((tasklist) => (
                            <Tab key={tasklist.tabkey}>
                                {tasklist.tasklistName}
                            </Tab>
                        ))}
                    </TabList>

                    {tasklists.map((tasklist) => (
                        <TabPanel key={tasklist.listid}>
                            <h2 className="display-6">
                                {tasklist.tasklistName}
                            </h2>
                            <input
                                type="checkbox"
                                onClick={toggleHideDone}
                                // checked={hideDone}
                                // id="hideDoneBtn"
                            />
                            <label
                            // htmlFor="hideDoneBtn"
                            >
                                Hide Done
                            </label>
                            <AddNewTodo
                                title={title}
                                setTitle={setTitle}
                                setTasklists={setTasklists}
                                tasklists={tasklists}
                                {...tasklist}
                                // allTodos={allTodos}
                                // setAllTodos={setAllTodos}
                            />
                            <ul className="list-group bg-light h-100 taskList">
                                {tasklist.items.map((item) => (
                                    <TodoItem
                                        key={item.id}
                                        {...tasklist}
                                        {...item}
                                        hideDone={hideDone}
                                        setTasklists={setTasklists}
                                        // allTodos={allTodos}
                                        // setAllTodos={setAllTodos}
                                    />
                                ))}
                            </ul>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
    );
}
export default Tasklist;
