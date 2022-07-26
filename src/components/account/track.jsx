import React from "react";

function padWithLeadingZero(number, targetLength) {
    return String(number).padStart(targetLength, "0");
}

function getDurationInMinutesAndSeconds(durationSeconds) {
    let minutes = Math.floor(durationSeconds / 60);
    let seconds = durationSeconds % 60;

    let paddedMinutes = padWithLeadingZero(minutes, 2);
    let paddedSeconds = padWithLeadingZero(seconds, 2);

    return `${paddedMinutes}:${paddedSeconds}`;
}

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
    let duration = getDurationInMinutesAndSeconds(track.durationSeconds);
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