import React, { useState } from "react";
import ArtistSuggestion from "./artist-suggestion";
import { Routes, Route } from "react-router-dom";
import FilterableDropdown from "../input/filterable-dropdown";
import Artist from "./artist";
import Release from "./release";

let release = {
    "spotifyId": "1CeTeKzAB1fBd3Y4mspZcW",
    "artists": [
        {
            "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
            "images": [],
            "name": "the indeepandas"
        }
    ],
    "images": [
        {
            "Height": 640,
            "Url": "https://i.scdn.co/image/ab67616d0000b273a5ae0c38b391d25aaf2a4254"
        },
        {
            "Height": 300,
            "Url": "https://i.scdn.co/image/ab67616d00001e02a5ae0c38b391d25aaf2a4254"
        },
        {
            "Height": 64,
            "Url": "https://i.scdn.co/image/ab67616d00004851a5ae0c38b391d25aaf2a4254"
        }
    ],
    "label": "The Indeepandas",
    "name": "2,5",
    "releaseDate": "2016-06-15",
    "trackNumber": 10,
    "tracks": [
        {
            "id": "6OQsqkLbBxcBGCnUmf5aht",
            "artists": [
                {
                    "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                    "images": [],
                    "name": "the indeepandas"
                }
            ],
            "discNumber": 1,
            "durationSeconds": 147,
            "explicit": true,
            "name": "V.I.A.",
            "trackNumber": 1
        },
        {
            "id": "5BtjwmLlmtUfp8ygqLCYwj",
            "artists": [
                {
                    "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                    "images": [],
                    "name": "the indeepandas"
                }
            ],
            "discNumber": 1,
            "durationSeconds": 155,
            "explicit": false,
            "name": "(Rum's Like A) Water",
            "trackNumber": 2
        },
        {
            "id": "3R7vQUPfrEFL8jZ0WqHvSN",
            "artists": [
                {
                    "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                    "images": [],
                    "name": "the indeepandas"
                }
            ],
            "discNumber": 1,
            "durationSeconds": 155,
            "explicit": false,
            "name": "Prepanda",
            "trackNumber": 3
        },
        {
            "id": "646kCXUzkFE0N2MHo7ydVw",
            "artists": [
                {
                    "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                    "images": [],
                    "name": "the indeepandas"
                }
            ],
            "discNumber": 1,
            "durationSeconds": 148,
            "explicit": true,
            "name": "Panda",
            "trackNumber": 4
        },
        {
            "id": "7DRfrPVTCY15y2WlUBBLxz",
            "artists": [
                {
                    "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                    "images": [],
                    "name": "the indeepandas"
                }
            ],
            "discNumber": 1,
            "durationSeconds": 135,
            "explicit": false,
            "name": "I'm Cool as a Vodka",
            "trackNumber": 5
        },
        {
            "id": "6IIOKd1WJ7zxHuQYeqyAJt",
            "artists": [
                {
                    "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                    "images": [],
                    "name": "the indeepandas"
                }
            ],
            "discNumber": 1,
            "durationSeconds": 167,
            "explicit": true,
            "name": "Bar Mile",
            "trackNumber": 6
        },
        {
            "id": "6s4ZC0pKR50NgPEV3GQyTn",
            "artists": [
                {
                    "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                    "images": [],
                    "name": "the indeepandas"
                }
            ],
            "discNumber": 1,
            "durationSeconds": 160,
            "explicit": true,
            "name": "Alcotrash",
            "trackNumber": 7
        },
        {
            "id": "1w2BnLF0c3VbfjYBWHQP9h",
            "artists": [
                {
                    "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                    "images": [],
                    "name": "the indeepandas"
                }
            ],
            "discNumber": 1,
            "durationSeconds": 235,
            "explicit": false,
            "name": "809 Days",
            "trackNumber": 8
        },
        {
            "id": "5mMiVGz9y85mDlbbE2luVK",
            "artists": [
                {
                    "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                    "images": [],
                    "name": "the indeepandas"
                },
                {
                    "spotifyId": "0LLOuptgSxZMDvLxH5UvgP",
                    "images": [],
                    "name": "Petr"
                }
            ],
            "discNumber": 1,
            "durationSeconds": 235,
            "explicit": true,
            "name": "Учился на тройки (feat. Petr)",
            "trackNumber": 9
        },
        {
            "id": "3O1LJAbCWeWOpqnTWLjXZR",
            "artists": [
                {
                    "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                    "images": [],
                    "name": "the indeepandas"
                }
            ],
            "discNumber": 1,
            "durationSeconds": 276,
            "explicit": true,
            "name": "Дивлюсь я на небо",
            "trackNumber": 10
        }
    ],
    "type": "album"
};
let artistReleases = [
    {
        "spotifyId": "7EK5kAqrsEHw7jFFF8QsaF",
        "artists": [
            {
                "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                "images": [],
                "name": "the indeepandas"
            }
        ],
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
        "label": "",
        "name": "Planescape of Limits",
        "releaseDate": "2021-12-22",
        "trackNumber": 7,
        "tracks": [],
        "type": "album"
    },
    {
        "spotifyId": "1CeTeKzAB1fBd3Y4mspZcW",
        "artists": [
            {
                "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                "images": [],
                "name": "the indeepandas"
            }
        ],
        "images": [
            {
                "Height": 640,
                "Url": "https://i.scdn.co/image/ab67616d0000b273a5ae0c38b391d25aaf2a4254"
            },
            {
                "Height": 300,
                "Url": "https://i.scdn.co/image/ab67616d00001e02a5ae0c38b391d25aaf2a4254"
            },
            {
                "Height": 64,
                "Url": "https://i.scdn.co/image/ab67616d00004851a5ae0c38b391d25aaf2a4254"
            }
        ],
        "label": "",
        "name": "2,5",
        "releaseDate": "2016-06-15",
        "trackNumber": 10,
        "tracks": [],
        "type": "album"
    },
    {
        "spotifyId": "7mNDAK9znFcW3y09hf3EFI",
        "artists": [
            {
                "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                "images": [],
                "name": "the indeepandas"
            }
        ],
        "images": [
            {
                "Height": 640,
                "Url": "https://i.scdn.co/image/ab67616d0000b27331142e8cba356978fbda4f20"
            },
            {
                "Height": 300,
                "Url": "https://i.scdn.co/image/ab67616d00001e0231142e8cba356978fbda4f20"
            },
            {
                "Height": 64,
                "Url": "https://i.scdn.co/image/ab67616d0000485131142e8cba356978fbda4f20"
            }
        ],
        "label": "",
        "name": "Naked Lunch",
        "releaseDate": "2015-07-02",
        "trackNumber": 12,
        "tracks": [],
        "type": "album"
    },
    {
        "spotifyId": "4PrcsgNHEysEvY8NJOjTru",
        "artists": [
            {
                "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                "images": [],
                "name": "the indeepandas"
            }
        ],
        "images": [
            {
                "Height": 640,
                "Url": "https://i.scdn.co/image/ab67616d0000b273e297aae597313c51d8bb0900"
            },
            {
                "Height": 300,
                "Url": "https://i.scdn.co/image/ab67616d00001e02e297aae597313c51d8bb0900"
            },
            {
                "Height": 64,
                "Url": "https://i.scdn.co/image/ab67616d00004851e297aae597313c51d8bb0900"
            }
        ],
        "label": "",
        "name": "Fairy",
        "releaseDate": "2012-04-09",
        "trackNumber": 12,
        "tracks": [],
        "type": "album"
    },
    {
        "spotifyId": "0ZAk9kiICZucwKbwijXRot",
        "artists": [
            {
                "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                "images": [],
                "name": "the indeepandas"
            }
        ],
        "images": [
            {
                "Height": 640,
                "Url": "https://i.scdn.co/image/ab67616d0000b2733aadef9ceeff895d9d0a35e3"
            },
            {
                "Height": 300,
                "Url": "https://i.scdn.co/image/ab67616d00001e023aadef9ceeff895d9d0a35e3"
            },
            {
                "Height": 64,
                "Url": "https://i.scdn.co/image/ab67616d000048513aadef9ceeff895d9d0a35e3"
            }
        ],
        "label": "",
        "name": "Sochny",
        "releaseDate": "2014-09-01",
        "trackNumber": 3,
        "tracks": [],
        "type": "single"
    }
];
let artists = [
    {
        "spotifyId": "0zwTbMuQxR72MDD0A8zT9X",
        "name": "89%",
        "releases": [
            {
                "spotifyId": "7EK5kAqrsEHw7jFFF8Qsa1",
                "artists": [
                    {
                        "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                        "images": [],
                        "name": "the indeepandas"
                    }
                ],
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
                "label": "",
                "name": "Planescape of Limits",
                "releaseDate": "2021-12-22",
                "trackNumber": 7,
                "tracks": [],
                "type": "album"
            },
            {
                "spotifyId": "7EK5kAqrsEHw7jFFF8Qsa2",
                "artists": [
                    {
                        "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                        "images": [],
                        "name": "the indeepandas"
                    }
                ],
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
                "label": "",
                "name": "Planescape of Limits",
                "releaseDate": "2021-12-22",
                "trackNumber": 7,
                "tracks": [],
                "type": "album"
            },
            {
                "spotifyId": "7EK5kAqrsEHw7jFFF8Qsa3",
                "artists": [
                    {
                        "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                        "images": [],
                        "name": "the indeepandas"
                    }
                ],
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
                "label": "",
                "name": "Planescape of Limits",
                "releaseDate": "2021-12-22",
                "trackNumber": 7,
                "tracks": [],
                "type": "album"
            },
            {
                "spotifyId": "7EK5kAqrsEHw7jFFF8Qsa4",
                "artists": [
                    {
                        "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                        "images": [],
                        "name": "the indeepandas"
                    }
                ],
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
                "label": "",
                "name": "Planescape of Limits",
                "releaseDate": "2021-12-22",
                "trackNumber": 7,
                "tracks": [],
                "type": "album"
            },
            {
                "spotifyId": "7EK5kAqrsEHw7jFFF8Qsa5",
                "artists": [
                    {
                        "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                        "images": [],
                        "name": "the indeepandas"
                    }
                ],
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
                "label": "",
                "name": "Planescape of Limits",
                "releaseDate": "2021-12-22",
                "trackNumber": 7,
                "tracks": [],
                "type": "album"
            },
            {
                "spotifyId": "7EK5kAqrsEHw7jFFF8Qsa6",
                "artists": [
                    {
                        "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                        "images": [],
                        "name": "the indeepandas"
                    }
                ],
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
                "label": "",
                "name": "Planescape of Limits",
                "releaseDate": "2021-12-22",
                "trackNumber": 7,
                "tracks": [],
                "type": "album"
            }
        ]
    },    
    {
        "spotifyId": "0zwTbMuQxR72MDD0A8zT9Y",
        "name": "Emoman",
        "releases": [
            {
                "spotifyId": "7EK5kAqrsEHw7jFFF8Qsa7",
                "artists": [
                    {
                        "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
                        "images": [],
                        "name": "the indeepandas"
                    }
                ],
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
                "label": "",
                "name": "Planescape of Limits",
                "releaseDate": "2021-12-22",
                "trackNumber": 7,
                "tracks": [],
                "type": "album"
            }
        ]
    },
    {
        "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
        "name": "the indeepandas",
        "releases": artistReleases
    }
];
// let artistSuggestions = [
//     {
//         "spotifyId": "6thqlvViYWovJxyBbNkpcO",
//         "images": [
//             {
//                 "Height": 640,
//                 "Url": "https://i.scdn.co/image/ab67616d0000b273e0558ed1f6b106b5260e97d1"
//             },
//             {
//                 "Height": 300,
//                 "Url": "https://i.scdn.co/image/ab67616d00001e02e0558ed1f6b106b5260e97d1"
//             },
//             {
//                 "Height": 64,
//                 "Url": "https://i.scdn.co/image/ab67616d00004851e0558ed1f6b106b5260e97d1"
//             }
//         ],
//         "name": "The Independents"
//     },
//     {
//         "spotifyId": "0zwTbMuQxR72MDD0A8zT9Z",
//         "images": [
//             {
//                 "Height": 640,
//                 "Url": "https://i.scdn.co/image/ab67616d0000b273a4836a64823c79372cf62a23"
//             },
//             {
//                 "Height": 300,
//                 "Url": "https://i.scdn.co/image/ab67616d00001e02a4836a64823c79372cf62a23"
//             },
//             {
//                 "Height": 64,
//                 "Url": "https://i.scdn.co/image/ab67616d00004851a4836a64823c79372cf62a23"
//             }
//         ],
//         "name": "the indeepandas"
//     },
//     {
//         "spotifyId": "548rrSsuNeXvWPR9ezbDUt",
//         "images": [
//             {
//                 "Height": 640,
//                 "Url": "https://i.scdn.co/image/ab6761610000e5ebe22151f762762b8bbe1e0af7"
//             },
//             {
//                 "Height": 320,
//                 "Url": "https://i.scdn.co/image/ab67616100005174e22151f762762b8bbe1e0af7"
//             },
//             {
//                 "Height": 160,
//                 "Url": "https://i.scdn.co/image/ab6761610000f178e22151f762762b8bbe1e0af7"
//             }
//         ],
//         "name": "The Independents"
//     },
//     {
//         "spotifyId": "497Tm5GXJo4ZEZODYBIEm9",
//         "images": [
//             {
//                 "Height": 640,
//                 "Url": "https://i.scdn.co/image/ab67616d0000b27318f302ae29b9645bb41a350c"
//             },
//             {
//                 "Height": 300,
//                 "Url": "https://i.scdn.co/image/ab67616d00001e0218f302ae29b9645bb41a350c"
//             },
//             {
//                 "Height": 64,
//                 "Url": "https://i.scdn.co/image/ab67616d0000485118f302ae29b9645bb41a350c"
//             }
//         ],
//         "name": "The Independent"
//     },
//     {
//         "spotifyId": "1ZaBov637MCZiuYMhEBGUY",
//         "images": [
//             {
//                 "Height": 640,
//                 "Url": "https://i.scdn.co/image/ab6761610000e5eb1cfb9b4e17f0c4589be9106c"
//             },
//             {
//                 "Height": 320,
//                 "Url": "https://i.scdn.co/image/ab676161000051741cfb9b4e17f0c4589be9106c"
//             },
//             {
//                 "Height": 160,
//                 "Url": "https://i.scdn.co/image/ab6761610000f1781cfb9b4e17f0c4589be9106c"
//             }
//         ],
//         "name": "The Independeners"
//     },
//     {
//         "spotifyId": "3aqMUgCyPOhYr2kENi5WDZ",
//         "images": [
//             {
//                 "Height": 640,
//                 "Url": "https://i.scdn.co/image/ab67616d0000b273d2d49297b14e457b9c6f5b9f"
//             },
//             {
//                 "Height": 300,
//                 "Url": "https://i.scdn.co/image/ab67616d00001e02d2d49297b14e457b9c6f5b9f"
//             },
//             {
//                 "Height": 64,
//                 "Url": "https://i.scdn.co/image/ab67616d00004851d2d49297b14e457b9c6f5b9f"
//             }
//         ],
//         "name": "The Independent Sound"
//     },
//     {
//         "spotifyId": "1s2oUruK2gdDRhh6aEcPpX",
//         "images": [
//             {
//                 "Height": 640,
//                 "Url": "https://i.scdn.co/image/ab67616d0000b2736a5964a6fd62c95bb394de2e"
//             },
//             {
//                 "Height": 300,
//                 "Url": "https://i.scdn.co/image/ab67616d00001e026a5964a6fd62c95bb394de2e"
//             },
//             {
//                 "Height": 64,
//                 "Url": "https://i.scdn.co/image/ab67616d000048516a5964a6fd62c95bb394de2e"
//             }
//         ],
//         "name": "The Independents"
//     },
//     {
//         "spotifyId": "7Ip7NsRxlHtac9MVRE2wNf",
//         "images": [
//             {
//                 "Height": 640,
//                 "Url": "https://i.scdn.co/image/ab67616d0000b2739eed858955d91144fb881e47"
//             },
//             {
//                 "Height": 300,
//                 "Url": "https://i.scdn.co/image/ab67616d00001e029eed858955d91144fb881e47"
//             },
//             {
//                 "Height": 64,
//                 "Url": "https://i.scdn.co/image/ab67616d000048519eed858955d91144fb881e47"
//             }
//         ],
//         "name": "The Indeed"
//     },
//     {
//         "spotifyId": "6paFuX94JPUGBwVheWFqhT",
//         "images": [
//             {
//                 "Height": 640,
//                 "Url": "https://i.scdn.co/image/ab67616d0000b273084ec4f97ff833d3462de6c1"
//             },
//             {
//                 "Height": 300,
//                 "Url": "https://i.scdn.co/image/ab67616d00001e02084ec4f97ff833d3462de6c1"
//             },
//             {
//                 "Height": 64,
//                 "Url": "https://i.scdn.co/image/ab67616d00004851084ec4f97ff833d3462de6c1"
//             }
//         ],
//         "name": "The Inceptionists"
//     },
//     {
//         "spotifyId": "2uc8e19GOJjdTSINXcf1Zn",
//         "images": [
//             {
//                 "Height": 640,
//                 "Url": "https://i.scdn.co/image/ab6761610000e5ebd2e6461abacd829a79882425"
//             },
//             {
//                 "Height": 320,
//                 "Url": "https://i.scdn.co/image/ab67616100005174d2e6461abacd829a79882425"
//             },
//             {
//                 "Height": 160,
//                 "Url": "https://i.scdn.co/image/ab6761610000f178d2e6461abacd829a79882425"
//             }
//         ],
//         "name": "The Indie Club"
//     }
// ];
let artistSuggestions = [];

function getArtistSuggestions(artistSuggestions, suggestionText) {
    return artistSuggestions.map((suggestion) => {
        let artist = {
            id: suggestion.spotifyId,
            imageUrl: suggestion.images[2].Url,
            name: suggestion.name
        };
        
        return (
            <li key={artist.id}>
                <ArtistSuggestion artist={artist} suggestionText={suggestionText} />
            </li>
        );
    });
}

function renderArtists(artists) {
    let artistsWithReleases = artists.map((artist) => {
        let artistWithReleases = {
            id: artist.spotifyId,
            name: artist.name,
            releases: artist.releases.map((release) => { 
                return{
                    id: release.spotifyId,
                    imageUrl: release.images[2].Url,
                    name: release.name,
                    releaseDate: release.releaseDate,
                    trackNumber: release.trackNumber,
                    tracks: release.tracks,
                    type: release.type
                };
            })
        }

        return (<Artist artist={artistWithReleases} key={artistWithReleases.id} />);
    })
    
    return (
        <div className="artist-list">
            {artistsWithReleases}
        </div>
    );
}

function renderSearchBar(suggestionText, setSuggestionText) {
    let suggestions = getArtistSuggestions(artistSuggestions, suggestionText);

    return(
        <FilterableDropdown placeholder="Search artist..." getValueFunc={setSuggestionText}>
            {suggestions}
        </FilterableDropdown>
    );
}

function renderEmptyPrompt() {
    return(
        <div className="no-artists-prompt secondary-prompt">No artists added to your account so far. Please, pick one from the search field below.</div>
    );
}

const Account = () => {
    const [suggestionText, setSuggestionText] = useState("");

    let hasNoData = artists === undefined || artists.length === 0;
    let searchBar = renderSearchBar(suggestionText, setSuggestionText);
    let artists1 = renderArtists(artists);

    return (
        <Routes>
            <Route path="/" element={
                <div className="account width-4">
                    {hasNoData && renderEmptyPrompt()}
                    {searchBar}
                    {artists1}
                </div>
            } />
            <Route path="/releases/:releaseId" element={<Release release={release} />} />
        </Routes>
    );
}

export default Account;