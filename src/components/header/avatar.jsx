import React from "react";

function getDummy() {
    return (
        <div className="avatar">
            <div className="circle"></div>
        </div>
    );
}

function getAvatar(avatarUrl) {
    return (
        <div className="avatar">
            <img className="img" src={avatarUrl} alt="avatar" />
        </div>
    );
}

const Avatar = ({avatarUrl}) => {
    // TODO: check avatarUrl
    if (avatarUrl === undefined)
        return getDummy();
    
    return getAvatar(avatarUrl);
}

export default Avatar;