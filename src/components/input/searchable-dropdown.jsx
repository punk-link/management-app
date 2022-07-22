import React from "react";

const SearchableDropdown = ({placeholder}) => {
    placeholder = placeholder ? placeholder : "";

    return (
        <div className="dropdown">
            <input type="text" placeholder={placeholder}></input>
        </div>
    );
}

export default SearchableDropdown;