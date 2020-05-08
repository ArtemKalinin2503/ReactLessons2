import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";

class App extends Component {
    constructor(props) {
        super(props);
        //State
        this.state = {
            todoData: [
                {label: 'Drink Coffee', id: 1},
                {label: 'Make Awesome App', id: 2},
                {label: 'Have a lunch', id: 3},
            ]
        }
    }

    //Methods
        //Удаление Записи в списке дел
        deleteItem = (id) => {
            this.setState((state) => {
                const idx = this.state.todoData.findIndex((el) => el.id === id); //Найдем index элемента который нужно удалить
                //Так как нельзя изменять state напрямую необходимо создать копию state, изменеить ее и потом записать заново в state
                const newArray = [
                    ...this.state.todoData.slice(0, idx),
                    ...this.state.todoData.slice(idx + 1)
                ]
                return {
                    todoData: newArray
                }
            })
        };

    render() {
        return (
            <div className="app__wrapper">
                <AppHeader/>
                <SearchPanel/>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                />
            </div>
        )
    }
}

export  default App