import React from "react";
import Track from "./track";

function renderTracks(releaseTracks) {
    let tracks = releaseTracks.map((track) => {
        return (
            <li key={track.id}>
                <Track track={track} />
            </li>
        );
    });

    return (<ul>{tracks}</ul>);
}

const Release = ({release}) => {
    let tracks = renderTracks(release.tracks);

    return (
        <div className="release shadowed">
            <div className="title">
                <img src={release.images[2].Url} alt={release.name} />
                {release.name}<span>{release.releaseDate}</span>
            </div>
            {tracks}
        </div>
    );
}

export default Release;