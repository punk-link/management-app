import React from "react";
import SearchableDropdown from "../input/searchable-dropdown"

let data = []

function renderArtists() {
    return (
        <div className="account width-4 vertical-grid-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quidem labore repellendus sequi cupiditate at iure inventore maxime, pariatur nobis consequuntur rem vel natus? Quis officiis rerum itaque facere porro?
        </div>
    );
}

function showEmptyPrompt() {
    return(
        <div className="account no-artists-prompt width-4 vertical-grid-2">
            <div>No artists added to your account so far. Please, pick one from the search field below.</div>
            <SearchableDropdown placeholder="Search artist..."/>
        </div>
    );
}

const Account = () => {
    // TODO: check data
    if (data === undefined || data === null || data !== [])
        return showEmptyPrompt();

    return renderArtists();
}

export default Account;