import React from "react";

const Container = ({children}) => {
    return (
        <div className="container width-12">
            {children}
        </div>
    );
}

export default Container;