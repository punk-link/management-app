import React from "react";
import List from "./list";
import TextInput from "./text-input";

const context = React.createContext()

const FilterableDropdown = ({placeholder, children}) => {
    placeholder = placeholder ? placeholder : "";

    return (
        <div className="dropdown">
            <TextInput placeholder={placeholder} />
            <List>
                {children}
            </List>
        </div>
    );
}

export default FilterableDropdown;