import React from "react";
import List from "../common/list";
import TextInput from "./text-input";

const FilterableDropdown = ({placeholder, children, getValueFunc}) => {
    placeholder = placeholder ? placeholder : "";

    return (
        <div className="filterable-dropdown">
            <TextInput placeholder={placeholder} getValueFunc={getValueFunc}/>
            <List>
                {children}
            </List>
        </div>
    );
}

export default FilterableDropdown;