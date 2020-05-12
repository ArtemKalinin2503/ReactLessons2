import React, {Component} from "react";
import {render} from "react-dom";
import '../scss/searchPanel.scss';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '' //в данном state будет value из state input search
        }
    }
    //Input поиска Задач (данный метод получить value из поиска и передаст его в компонент App)
    onSearchChange = (event) => {
        const term  = event.target.value;
        this.setState({
            term: term
        });
        this.props.onSearchChange(term); //Получили метод onSearchChange в качестве props и передали в него state tern
    };

    render() {
        return (
            <div className="searchPanel__wrapper">
                <input type="text"
                       placeholder="search"
                       className="search-input"
                       value={this.state.term}
                       onChange={this.onSearchChange}
                />
            </div>
        )
    }
}

export default SearchPanel

