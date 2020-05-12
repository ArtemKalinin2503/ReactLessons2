import React, {Component} from "react";
import '../scss/addTodo.scss';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: ''
        }
    }

    //Добавить новую задачу
    onTodoChange = (event) => {
        let inputValue = event.target.value; //Получение значение input
        this.setState({
            label: inputValue
        })
    }
    //Отправка формы
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodoAdded(this.state.label); //Вызовим данный метод описаный в App.js Для добавления новой записи
        //Отчистим state после отправки формы
        this.setState({
            label: ''
        })
    }

    render() {
        return(
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    onChange={this.onTodoChange}
                    placeholder="What needs to de done"
                    value={this.state.label}
                />
                <button className="btn btn-outline-secondary btn-sm">Add Todo</button>
            </form>
        )
    }
}

export default AddTodo