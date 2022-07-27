import React from "react";
import dateHelper from "../../helpers/date-helpers";

function renderExplicitSign() {
    return (<span className="is-explicit">🄴</span>);
}

function renderFeatures(artists) {
    if (artists.length < 2)
        return null;

    let featureArtists = artists.slice(1)
        .map((artist) => artist.name)
        .join(", ");

    return (<span className="features">feat. {featureArtists}</span>);
}

const Track = ({track}) => {
    let duration = dateHelper.getDurationInMinutesAndSeconds(track.durationSeconds);
    let explicitSign = track.explicit && renderExplicitSign();
    let features = renderFeatures(track.artists);

    return (
        <div>
            <span className="track-number">{track.trackNumber}</span>
            <span className="track-title">{track.name}</span>
            {features}
            {explicitSign}
            <span className="track-length">{duration}</span>
        </div>
    );
}

export default Track;