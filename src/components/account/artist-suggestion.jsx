import React from "react";

const ArtistSuggestion = ({artist}) => {
    return (
        <div className="artist-suggestion">
            <img src={artist.imageUrl} alt={artist.name} />
            <span>{artist.name}</span>
            <span>{artist.id}</span>
        </div>
    );
}

export default ArtistSuggestion;