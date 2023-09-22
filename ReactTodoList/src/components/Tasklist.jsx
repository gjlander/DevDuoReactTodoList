import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddNewTodo from "./AddNewTodo";
import TodoItem from "./TodoItem";
function Tasklist({ allTodos, setAllTodos }) {
    const [title, setTitle] = useState("");

    return (
        <div className="row justify-content-center">
            <div className="col col-lg-6">
                <Tabs>
                    <TabList>
                        <Tab>Tasks</Tab>
                        <Tab>Title 2</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className="display-6">Tasks</h2>
                        <AddNewTodo
                            title={title}
                            setTitle={setTitle}
                            allTodos={allTodos}
                            setAllTodos={setAllTodos}
                        />
                        <ul className="list-group bg-light h-100 taskList">
                            {allTodos &&
                                allTodos.map((todo) => (
                                    <TodoItem
                                        key={todo.id}
                                        {...todo}
                                        allTodos={allTodos}
                                        setAllTodos={setAllTodos}
                                        // editing={editing}
                                        // setEditing={setEditing}
                                    />
                                ))}
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
}
export default Tasklist;
