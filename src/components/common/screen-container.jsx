import React from "react";

const ScreenContainer = ({children}) => {
    return (
        <div className="screen-container width-12">
            {children}
        </div>
    );
}

export default ScreenContainer;