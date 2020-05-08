import React from "react";
import {render} from "react-dom";
import '../scss/searchPanel.scss';
import ItemStatusFilter from "./ItemStatusFilter";

const SearchPanel = () => {
    return (
        <div className="searchPanel__wrapper">
            <input type="text" placeholder="search" className="search-input"/>
            <ItemStatusFilter/>
        </div>
    )

}

export default SearchPanel

