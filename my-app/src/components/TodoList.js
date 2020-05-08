import React from "react";
import {render} from "react-dom";
import TodoListItem from "./TodoListItem";
import '../scss/todoList.scss';

const TodoList = (props) => {
    return (
        <div className="todoList__wrapper">
            <ul className="list-group todo-list">
                {props.todos.map((item, index) => {
                    return (
                        <li className="list-group-item">
                            <TodoListItem
                                key={item.id}
                                { ...item } //Так можно передать сразу всех props
                                onDeleted={() => props.onDeleted(item.id)}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList

