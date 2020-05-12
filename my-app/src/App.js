import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import ItemStatusFilter from "./components/ItemStatusFilter";

class App extends Component {

    maxId = 100; //Для генерации id

    constructor(props) {
        super(props);
        //State
        this.state = {
            todoData: [
                {
                    label: 'Drink Coffee',
                    important: false,
                    done: false,
                    id: 1
                },
            ],
            term: '', //state в который прейдет значение value поиска из компонента SearchPanel
            filter: 'all' //All, Active, Done - кнопки
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
        //Добавление Записи
        addTodoAdded = (text) => {
            //Создание новой Заметки
            const newTodo = {
                label: text,
                important: false,
                done: false,
                id: this.maxId++  //Генерация id
            }
            this.setState(() => {
                const newArr = [ //Так как в React нельзя менять state напрямую (копируем весь state todoData и записываем в него новый объект)
                    ...this.state.todoData,
                    newTodo
                ]
                return {
                    todoData: newArr //Запишем в state todoData новой объект
                }
            })
        };
        //Функция котрая приминимает state, id - элемента по которому прошел клик (Запись), имя prop который нужно изменить
        toggleProperty(arr, id, propName) {
            const idx = arr.findIndex((el) => el.id === id); //Найдем index элемента
            const oldTodo = arr[idx];
            const newTodo = {...oldTodo, [propName]: !oldTodo[propName]}; //Получим именно тот Todo по которому кликнули + изменим state done
            //Создадим новый массив
            return [
                ...arr.slice(0, idx),
                newTodo,
                ...arr.slice(idx + 1)
            ]
        };
        //Клик по Задаче
        onToggleDone = (id) => {
            this.setState(() => {
                return {
                    todoData: this.toggleProperty(this.state.todoData, id, 'done')
                }
            });
        };
        //Клик по кнопку Важно
        onToggleImportant = (id) => {
            this.setState(() => {
                return {
                    todoData: this.toggleProperty(this.state.todoData, id, 'important')
                }
            });
        };
        //Данный метод получить term - из компонента SearchPanel
        onSearchChange = (term) => {
            this.setState({
                term: term
            })
        };
        //Поиск Задач
        search = (items, term) => { //Данный метод принимает в качестве парметров state и отдельно state term
            if (term.length === '') {
                return items
            }
            return items.filter((item) => { //Данный метод filter отфильтруем переданный this.state.todoData по параметру this.state.term
                return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1; //
            })
        };
        //Данный метод фильтруем Задачи исходя из state filter
        filter = (items, filter) => {
            switch (filter) {
                case 'all':
                    return items;
                case 'active':
                    return items.filter((item) => !item.done);
                case 'done':
                    return items.filter((item) => item.done);
                default:
                    return items;
            }
        };
        //Клик по кнопке фильтра All/Active/Done
        onFilterChange = (filter) => {
            this.setState({
                filter: filter
            })
        };

    render() {

        const visibleTodo = this.filter(this.search(this.state.todoData, this.state.term), this.state.filter); //Вызовим функцию search и передадим в нее параметры this.state.todoData и state term
        const doneCount = this.state.todoData.filter((el) => el.done).length; //Количество выполненых Задач (метод filter вернет только те state где done = true)
        const todoCount = this.state.todoData.length - doneCount; //Количество задач (возьмем всю длину state todoData и вычткм из него те задачи которые done = true)

        return (
            <div className="app__wrapper">
                <AppHeader done={doneCount} todoCount={todoCount}/>
                <SearchPanel onSearchChange={this.onSearchChange}/>
                <ItemStatusFilter
                    filter={this.state.filter}
                    onFilterChange={this.onFilterChange}
                />
                <TodoList
                    todos={visibleTodo}
                    onDeleted={this.deleteItem} //Передача метода в качестве props
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddTodo addTodoAdded={this.addTodoAdded}/> {/*Передача метода в качестве props*/}
            </div>
        )
    }
}

export  default App