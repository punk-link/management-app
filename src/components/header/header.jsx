import React from "react";
import ManagerInfo from "./manager-info";
import Logo from "../common/logo";

const Header = () => {
    return (
        <div className="app-header width-12 vertically-shadowed grid-12">
            <ManagerInfo />
            <div className="filler width-7"></div>
            <Logo />
        </div>
    );
}

export default Header;