import React from "react";

function getDummy() {
    return (
        <div className="circle"></div>
    );
}

function getAvatar(avatarUrl) {
    return (
        <img className="img" src={avatarUrl} alt="avatar" />
    );
}

const Avatar = ({avatarUrl}) => {
    let content = avatarUrl ? getAvatar(avatarUrl) : getDummy();

    return (
        <div className="avatar">
            {content}
        </div>
    );
}

export default Avatar;