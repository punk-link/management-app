import React, { useState } from "react";
import List from "../common/list";
import ReleaseListItem from "./release-list-ltem";

function formatReleaseNumber(releases) {
    if (releases.length === 1) 
        return "1 release";
    
    return releases.length + " releases";
}

function renderReleases(artistReleases) {
    let releases = artistReleases.map((release) => {
        return (
            <li key={release.id}>
                <ReleaseListItem release={release} />
            </li>
        );
    });

    return (
        <List>
            {releases}
        </List>
    );
}

const ArtistReleaseList = ({artist}) => {
    const [isUnfold, setFoldState] = useState(false);

    let releaseNumber = formatReleaseNumber(artist.releases);
    let releases = renderReleases(artist.releases);

    return (
        <div className="artist-releases-container shadowed">
            <div className="title" onClick={(e) => setFoldState(!isUnfold)}>
                {artist.name}<span>{releaseNumber}</span>
            </div>
            {isUnfold && releases}
        </div>
    );
}

export default ArtistReleaseList;