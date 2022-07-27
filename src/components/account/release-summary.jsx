import React from "react";
import { Link } from "react-router-dom";

function formatServiceNumber() {
    return "1/1 services";
}

function formatTrackNumber(trackNumber) {
    if (trackNumber === 1)
        return "1 track";
    
    return `${trackNumber} tracks`;
}

const ReleaseSummary = ({release}) => {
    let serviceNumber = formatServiceNumber();
    let trackNumber = formatTrackNumber(release.trackNumber);

    return (
        <Link to={`/releases/${release.id}`} key={release.id}>
            <img src={release.imageUrl} alt={release.name} />
            <span className="name">{release.name}</span>
            <span className="metadata">{release.releaseDate}, {trackNumber}</span>
            <span className="service-number">{serviceNumber}</span>
        </Link>
    );
}

export default ReleaseSummary;