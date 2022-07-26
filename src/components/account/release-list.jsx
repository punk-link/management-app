import React, { useState } from "react";
import ReleaseListItem from "./release-list-ltem";

function formatReleaseNumber(releases) {
    if (releases.length === 1) 
        return "1 release";
    
    return `${releases.length} releases`;
}

function renderReleases(artistReleases) {
    let releases = artistReleases.map((release) => {
        return (
            <li key={release.id}>
                <ReleaseListItem release={release} />
            </li>
        );
    });

    return (<ul>{releases}</ul>);
}

const ReleaseList = ({artist}) => {
    const [isUnfold, setFoldState] = useState(false);

    let releaseNumber = formatReleaseNumber(artist.releases);
    let releases = isUnfold && renderReleases(artist.releases);

    return (
        <div className="releases-render-list shadowed">
            <div className="title" onClick={(e) => setFoldState(!isUnfold)}>
                {artist.name}<span>{releaseNumber}</span>
            </div>
            {releases}
        </div>
    );
}

export default ReleaseList;