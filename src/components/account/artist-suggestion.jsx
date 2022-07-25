import React from "react";

function getHighlitedName(artistName, suggestionText) {
    let preHighlitedText = "";
    let highlitedText = "";
    let postHighlitedText = "";

    if (suggestionText.length < 3) {
        postHighlitedText = artistName;
        return {preHighlitedText, highlitedText, postHighlitedText};
    }
    
    let suggestionStartPosition = artistName.toLowerCase().indexOf(suggestionText);
    
    if (suggestionStartPosition === -1) {
        postHighlitedText = artistName;
        return {preHighlitedText, highlitedText, postHighlitedText};
    } 
    
    let suggestionEndPosition = suggestionStartPosition + suggestionText.length;

    for (var i = 0; i < artistName.length; i++) {
        if (i < suggestionStartPosition) {
            preHighlitedText += artistName[i];
        } else if (suggestionStartPosition <= i && i < suggestionEndPosition) {
            highlitedText += artistName[i];
        } else {
            postHighlitedText += artistName[i];
        }
    }

    return {preHighlitedText, highlitedText, postHighlitedText};
}

const ArtistSuggestion = ({artist, suggestionText}) => {
    let {preHighlitedText, highlitedText, postHighlitedText} = getHighlitedName(artist.name, suggestionText);    

    return (
        <div className="artist-suggestion">
            <img src={artist.imageUrl} alt={artist.name} />
            <span>
                {preHighlitedText}<span>{highlitedText}</span>{postHighlitedText}
            </span>
            <span>{artist.id}</span>
        </div>
    );
}

export default ArtistSuggestion;