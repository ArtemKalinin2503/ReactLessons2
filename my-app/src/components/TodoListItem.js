import React, {Component} from "react";
import {render} from "react-dom";
import '../scss/todoListItem.scss';

class TodoListItem extends Component {

    constructor(props) {
        super(props);
        //State
        this.state = {
            done: false,
            important: false
        }
    }

    //Methods
        //Клик по задаче
        onLabelClick = () => {
            //Изменение state
            this.setState((state) => { //Так необходимо изменять state если меняем значение на противоположное
                return {
                    done: !state.done
                }
            })
        };

        //Клик по кнопке важно
        onImportantClick = () => {
            this.setState((state) => { //Так необходимо изменять state если меняем значение на противоположное
                return {
                    important: !state.important
                }
            })
        };

        //Клик по кнопке удалить

    render() {
        return (
            <div className={this.state.important ? 'todoListItem__wrapper important' : 'todoListItem__wrapper'} >
                <span
                    onClick={this.onLabelClick}
                    className={this.state.done ? 'done' : ''} //Динамический класс по условию
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
                        onClick={this.onImportantClick}
                    >
                        <i className="fa fa-exclamation"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default TodoListItem

