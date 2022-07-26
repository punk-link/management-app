import React from "react";

const List = ({children}) => {
    if (children.length === 0)
        return null;

    return (
        <ul>
            {children}
        </ul>
    );
}

export default List;