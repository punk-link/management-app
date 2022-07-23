import React, { useState } from "react";

const AccountContext = React.createContext("account context");

const AccountContextProvider = ({children}) => {
    const [textValue, setTextValue] = useState("");

    return (
        <AccountContextProvider.Provider value={{ textValue}}>
            {children}
        </AccountContextProvider.Provider>
    );
}

export default AccountContextProvider;