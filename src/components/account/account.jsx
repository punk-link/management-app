import React from "react";
import AccountContextProvider from "./account-context";
import ArtistSuggestion from "./artist-suggestion";
import FilterableDropdown from "../input/filterable-dropdown";

let data = [];
let artistSuggestions = [
    {
        "spotifyId": "6thqlvViYWovJxyBbNkpcO",
        "images": [
            {
                "Height": 640,
                "Url": "https://i.scdn.co/image/ab67616d0000b273e0558ed1f6b106b5260e97d1"
            },
            {
                "Height": 300,
                "Url": "https://i.scdn.co/image/ab67616d00001e02e0558ed1f6b106b5260e97d1"
            },
            {
                "Height": 64,
                "Url": "https://i.scdn.co/image/ab67616d00004851e0558ed1f6b106b5260e97d1"
            }
        ],
        "name": "The Independents"
    },
    {
        "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
        "images": [
            {
                "Height": 640,
                "Url": "https://i.scdn.co/image/ab67616d0000b273a4836a64823c79372cf62a23"
            },
            {
                "Height": 300,
                "Url": "https://i.scdn.co/image/ab67616d00001e02a4836a64823c79372cf62a23"
            },
            {
                "Height": 64,
                "Url": "https://i.scdn.co/image/ab67616d00004851a4836a64823c79372cf62a23"
            }
        ],
        "name": "the indeepandas"
    },
    {
        "spotifyId": "548rrSsuNeXvWPR9ezbDUt",
        "images": [
            {
                "Height": 640,
                "Url": "https://i.scdn.co/image/ab6761610000e5ebe22151f762762b8bbe1e0af7"
            },
            {
                "Height": 320,
                "Url": "https://i.scdn.co/image/ab67616100005174e22151f762762b8bbe1e0af7"
            },
            {
                "Height": 160,
                "Url": "https://i.scdn.co/image/ab6761610000f178e22151f762762b8bbe1e0af7"
            }
        ],
        "name": "The Independents"
    },
    {
        "spotifyId": "497Tm5GXJo4ZEZODYBIEm9",
        "images": [
            {
                "Height": 640,
                "Url": "https://i.scdn.co/image/ab67616d0000b27318f302ae29b9645bb41a350c"
            },
            {
                "Height": 300,
                "Url": "https://i.scdn.co/image/ab67616d00001e0218f302ae29b9645bb41a350c"
            },
            {
                "Height": 64,
                "Url": "https://i.scdn.co/image/ab67616d0000485118f302ae29b9645bb41a350c"
            }
        ],
        "name": "The Independent"
    },
    {
        "spotifyId": "1ZaBov637MCZiuYMhEBGUY",
        "images": [
            {
                "Height": 640,
                "Url": "https://i.scdn.co/image/ab6761610000e5eb1cfb9b4e17f0c4589be9106c"
            },
            {
                "Height": 320,
                "Url": "https://i.scdn.co/image/ab676161000051741cfb9b4e17f0c4589be9106c"
            },
            {
                "Height": 160,
                "Url": "https://i.scdn.co/image/ab6761610000f1781cfb9b4e17f0c4589be9106c"
            }
        ],
        "name": "The Independeners"
    },
    {
        "spotifyId": "3aqMUgCyPOhYr2kENi5WDZ",
        "images": [
            {
                "Height": 640,
                "Url": "https://i.scdn.co/image/ab67616d0000b273d2d49297b14e457b9c6f5b9f"
            },
            {
                "Height": 300,
                "Url": "https://i.scdn.co/image/ab67616d00001e02d2d49297b14e457b9c6f5b9f"
            },
            {
                "Height": 64,
                "Url": "https://i.scdn.co/image/ab67616d00004851d2d49297b14e457b9c6f5b9f"
            }
        ],
        "name": "The Independent Sound"
    },
    {
        "spotifyId": "1s2oUruK2gdDRhh6aEcPpX",
        "images": [
            {
                "Height": 640,
                "Url": "https://i.scdn.co/image/ab67616d0000b2736a5964a6fd62c95bb394de2e"
            },
            {
                "Height": 300,
                "Url": "https://i.scdn.co/image/ab67616d00001e026a5964a6fd62c95bb394de2e"
            },
            {
                "Height": 64,
                "Url": "https://i.scdn.co/image/ab67616d000048516a5964a6fd62c95bb394de2e"
            }
        ],
        "name": "The Independents"
    },
    {
        "spotifyId": "7Ip7NsRxlHtac9MVRE2wNf",
        "images": [
            {
                "Height": 640,
                "Url": "https://i.scdn.co/image/ab67616d0000b2739eed858955d91144fb881e47"
            },
            {
                "Height": 300,
                "Url": "https://i.scdn.co/image/ab67616d00001e029eed858955d91144fb881e47"
            },
            {
                "Height": 64,
                "Url": "https://i.scdn.co/image/ab67616d000048519eed858955d91144fb881e47"
            }
        ],
        "name": "The Indeed"
    },
    {
        "spotifyId": "6paFuX94JPUGBwVheWFqhT",
        "images": [
            {
                "Height": 640,
                "Url": "https://i.scdn.co/image/ab67616d0000b273084ec4f97ff833d3462de6c1"
            },
            {
                "Height": 300,
                "Url": "https://i.scdn.co/image/ab67616d00001e02084ec4f97ff833d3462de6c1"
            },
            {
                "Height": 64,
                "Url": "https://i.scdn.co/image/ab67616d00004851084ec4f97ff833d3462de6c1"
            }
        ],
        "name": "The Inceptionists"
    },
    {
        "spotifyId": "2uc8e19GOJjdTSINXcf1Zn",
        "images": [
            {
                "Height": 640,
                "Url": "https://i.scdn.co/image/ab6761610000e5ebd2e6461abacd829a79882425"
            },
            {
                "Height": 320,
                "Url": "https://i.scdn.co/image/ab67616100005174d2e6461abacd829a79882425"
            },
            {
                "Height": 160,
                "Url": "https://i.scdn.co/image/ab6761610000f178d2e6461abacd829a79882425"
            }
        ],
        "name": "The Indie Club"
    }
];

function getArtistSuggestions(artistSuggestions) {
    return artistSuggestions.map((suggestion) => {
        let artist = {
            id: suggestion.spotifyId,
            imageUrl: suggestion.images[2].Url,
            name: suggestion.name
        };
        
        return (
            <li key={artist.id}>
                <ArtistSuggestion artist={artist} />
            </li>
        );
    });
}

function renderArtists() {
    return (
        <div className="account width-4 vertical-grid-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quidem labore repellendus sequi cupiditate at iure inventore maxime, pariatur nobis consequuntur rem vel natus? Quis officiis rerum itaque facere porro?
        </div>
    );
}

function showEmptyPrompt() {
    let suggestions = getArtistSuggestions(artistSuggestions);
    
    return(
        <AccountContextProvider>
            <div className="account no-artists-prompt width-4">
                <div className="secondary-prompt">No artists added to your account so far. Please, pick one from the search field below.</div>
                <FilterableDropdown placeholder="Search artist...">
                    {suggestions}
                </FilterableDropdown>
            </div>
        </AccountContextProvider>
    );
}

const Account = () => {
    if (data === undefined || data.length === 0)
        return showEmptyPrompt();

    return renderArtists();
}

export default Account;