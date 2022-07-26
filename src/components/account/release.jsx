import React, {useState} from "react";
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
    const [isUnfold, setFoldState] = useState(false);
    let tracks = isUnfold && renderTracks(release.tracks);

    return (
        <div className="release-render-list shadowed">
            <div className="title" onClick={(e) => setFoldState(!isUnfold)}>
                <img src={release.images[2].Url} alt={release.name} />
                {release.name}<span>{release.releaseDate}</span>
            </div>
            {tracks}
        </div>
    );
}

export default Release;