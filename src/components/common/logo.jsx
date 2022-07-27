import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link className="logo width-2" to={"/"}>
            punk.link
        </Link>
    );
}

export default Logo;