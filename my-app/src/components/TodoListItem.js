import React, {Component} from "react";
import {render} from "react-dom";
import '../scss/todoListItem.scss';

class TodoListItem extends Component {

    render() {
        return (
            <div className={this.props.important ? 'todoListItem__wrapper important' : 'todoListItem__wrapper'} >
                <span
                    onClick={this.props.onToggleDone}
                    className={this.props.done ? 'done' : ''} //Динамический класс по условию
                >
                    {this.props.label}
                </span>
                <div>
                    <button type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={this.props.onDeleted} //Получим функцию как props прокинутую из компоенента TodoList
                    >
                        <i className="fa fa-trash-o"/>
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-success btn-sm"
                        onClick={this.props.onToggleImportant}
                    >
                        <i className="fa fa-exclamation"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default TodoListItem

