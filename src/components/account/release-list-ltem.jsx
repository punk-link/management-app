import React from "react";

function formatServiceNumber() {
    return "1/1 services";
}

function formatTrackNumber(trackNumber) {
    if (trackNumber === 1)
        return "1 track";
    
    return `${trackNumber} tracks`;
}

const ReleaseListItem = ({release}) => {
    let serviceNumber = formatServiceNumber();
    let trackNumber = formatTrackNumber(release.trackNumber);

    return (
        <div>
            <img src={release.imageUrl} alt={release.name} />
            <span className="name">{release.name}</span>
            <span className="metadata">{release.releaseDate}, {trackNumber}</span>
            <span className="service-number">{serviceNumber}</span>
        </div>
    );
}

export default ReleaseListItem;