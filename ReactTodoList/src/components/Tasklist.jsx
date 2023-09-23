import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddNewTodo from "./AddNewTodo";
import TodoItem from "./TodoItem";
function Tasklist({ allTodos, setAllTodos, tasklists, setTasklists }) {
    const [title, setTitle] = useState("");

    return (
        <div className="row justify-content-center">
            <div className="col col-lg-6">
                <Tabs>
                    <TabList>
                        {tasklists.map((tasklist) => (
                            <Tab key={tasklist.tasklistName} {...tasklist}>
                                {tasklist.tasklistName}
                            </Tab>
                        ))}
                    </TabList>

                    {tasklists.map((tasklist) => (
                        <TabPanel key={tasklist.id}>
                            <h2 className="display-6">
                                {tasklist.tasklistName}
                            </h2>
                            <AddNewTodo
                                title={title}
                                setTitle={setTitle}
                                allTodos={allTodos}
                                setAllTodos={setAllTodos}
                                setTasklists={setTasklists}
                            />
                            <ul className="list-group bg-light h-100 taskList">
                                {allTodos &&
                                    allTodos.map((todo) => (
                                        <TodoItem
                                            key={todo.id}
                                            {...todo}
                                            allTodos={allTodos}
                                            setAllTodos={setAllTodos}
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
