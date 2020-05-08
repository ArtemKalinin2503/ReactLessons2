import React from "react";
import {render} from "react-dom";
import '../scss/appHeader.scss';

const AppHeader = () => {
    return (
        <div className="app-header">
            <h1>Todo List</h1>
            <h2>1 more to do, 3 done</h2>
        </div>
    )

}

export default AppHeader

