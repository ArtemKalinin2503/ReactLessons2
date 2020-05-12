import React from "react";
import {render} from "react-dom";
import '../scss/appHeader.scss';

const AppHeader = (props) => {
    return (
        <div className="app-header">
            <h1>Todo List</h1>
            <h2>{props.todoCount} more to do, {props.done} done</h2>
        </div>
    )

}

export default AppHeader

