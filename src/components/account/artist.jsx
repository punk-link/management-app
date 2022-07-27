import React, { useState } from "react";
import ReleaseSummary from "./release-summary";

function formatReleaseNumber(releases) {
    if (releases.length === 1) 
        return "1 release";
    
    return `${releases.length} releases`;
}

function renderReleaseSummaries(artistReleases) {
    let summaries = artistReleases.map((release) => {
        return (
            <li key={release.id}>
                <ReleaseSummary release={release} />
            </li>
        );
    });

    return (<ul>{summaries}</ul>);
}

const Artist = ({artist}) => {
    const [isUnfold, setFoldState] = useState(false);

    let releaseNumber = formatReleaseNumber(artist.releases);
    let releaseSummaries = isUnfold && renderReleaseSummaries(artist.releases);

    return (
        <div className="artist shadowed">
            <div className="title" onClick={(e) => setFoldState(!isUnfold)}>
                {artist.name}<span>{releaseNumber}</span>
            </div>
            {releaseSummaries}
        </div>
    );
}

export default Artist;