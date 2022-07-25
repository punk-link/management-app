import React from "react";

const SecondaryScreenContainer = ({children}) => {
    return (
        <div className="secondary-screen-container width-12 grid-12">
            {children}
        </div>
    );
}

export default SecondaryScreenContainer;