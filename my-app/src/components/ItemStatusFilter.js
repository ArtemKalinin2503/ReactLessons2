import React, {Component} from "react";
import {render} from "react-dom";

class ItemStatusFilter extends Component {

    //Массив для кнопок Фильтра
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ]

    render() {
        //Массив кнопок фильтра
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = this.props.filter === name;
            return (
                <button type="button"
                        className={isActive ? 'btn btn-info' : 'btn btn-outline-secondary'}
                        key={name}
                        onClick={() => this.props.onFilterChange(name)} //При клике на кнопку передадим имя фильтра
                >
                    {label}
                </button>
            )
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

export default ItemStatusFilter

