import React from "react";
import Distributor from "./distributor";
import Track from "./track";
import dateHelper from "../../helpers/date-helpers";

function filterDistributors(distributors) {
    let availableDistrubutors = [];
    let unavailableDistrubutors = [];

    return {availableDistrubutors, unavailableDistrubutors};
}

function renderTracks(releaseTracks) {
    let tracks = releaseTracks.sort((t1, t2) => {
        return t1.trackNumber - t2.trackNumber;
    }).map((track) => {
        return (
            <li key={track.id}>
                <Track track={track} />
            </li>
        );
    });

    return (<ul>{tracks}</ul>);
}

function renderDistributors(distributors) {
    if (distributors.length === 0)
        return null;

    let d = distributors.map((distributor) => {
        return <li><Distributor /></li>
    })
    
    return (<ul>{d}</ul>);
}

const Release = ({release}) => {
    let tracks = renderTracks(release.tracks);
    let releaseDate = dateHelper.getLocaleDateString(release.releaseDate);

    let distributors = [];
    let { availableDistrubutors, unavailableDistrubutors} = filterDistributors(distributors);

    let d1 = renderDistributors(availableDistrubutors);
    let d2 = renderDistributors(unavailableDistrubutors);

    let unavailableDistrubutorsMarkup = null;
    if (d2 !== null)
        unavailableDistrubutorsMarkup = (
            <div className="unavailable">
                <div className="title">
                    Unavailable at <span>{`${unavailableDistrubutors.length}/${distributors.length}`}</span>
                </div>
                {d2}
            </div>
        );

    return (
        <div>
            <div className="release shadowed">
                <div className="title">
                    <img src={release.images[2].Url} alt={release.name} />
                    {release.name}<span>{releaseDate}</span>
                </div>
                {tracks}
            </div>
            <div className="distributors shadowed">
                <div className="available">
                    <div className="title">
                        Available at <span>{`${availableDistrubutors.length}/${distributors.length}`}</span>
                    </div>
                    {d1}
                </div>
                {unavailableDistrubutorsMarkup}
            </div>
        </div>
    );
}

export default Release;