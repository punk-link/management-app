import React from "react";
import ManagerInfo from "./manager-info";
import Logo from "../common/logo";

const Header = () => {
    return (
        <div className="app-header width-12/12 vertically-shadowed grid-12">
            <div className="filler width-1/12"></div>
            <ManagerInfo />
            <div className="filler width-4/12"></div>
            <Logo />
            <div className="filler width-1/12"></div>
        </div>
    );
}

export default Header;