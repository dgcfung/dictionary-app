# dictionary-app

Dictionary-App
This project will create an interactive dictionary app based on the Merriam-Webster dictionary API. Please refer to the following link: https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=87d2992b-b381-4b38-83e5-f42244d14615. Because a plain dictionary may make for a boring user-experience and result in less return visits. I will add a scroll down menu to allow the user to select words based on the keywords entered. Furthermore, I will add styling. Pending time, constraints, I will also access a second API to access latest news/stock ticker/ or entertainment news.

API Snippet
[
    {
        "meta": {
            "id": "voluminous",
            "uuid": "0d01b967-971f-4ec5-8fe0-10513d29c39b",
            "sort": "220130400",
            "src": "collegiate",
            "section": "alpha",
            "stems": [
                "voluminous",
                "voluminously",
                "voluminousness",
                "voluminousnesses"
            ],
            "offensive": false
        },
        "hwi": {
            "hw": "vo*lu*mi*nous",
            "prs": [
                {
                    "mw": "və-ˈlü-mə-nəs",
                    "sound": {
                        "audio": "volumi02",
                        "ref": "c",
                        "stat": "1"
                    }
                }
            ]
        },
        "fl": "adjective",
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sense",
                            {
                                "sn": "1 a",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}having or marked by great {a_link|volume} or bulk {bc}{sx|large||} "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "long {wi}voluminous{/wi} tresses"
                                            }
                                        ]
                                    ]
                                ],
                                "sdsense": {
                                    "sd": "also",
                                    "dt": [
                                        [
                                            "text",
                                            "{bc}{sx|full||} "
                                        ],
                                        [
                                            "vis",
                                            [
                                                {
                                                    "t": "a {wi}voluminous{/wi} skirt"
                                                }
                                            ]
                                        ]
                                    ]
                                }
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}{sx|numerous||} "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "trying to keep track of {wi}voluminous{/wi} slips of paper"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "2 a",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}filling or capable of filling a large volume or several {a_link|volumes} "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "a {wi}voluminous{/wi} literature on the subject"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ],
                        [
                            "sense",
                            {
                                "sn": "b",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}writing or speaking much or at great length "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "a {wi}voluminous{/wi} correspondent"
                                            }
                                        ]
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "3",
                                "dt": [
                                    [
                                        "text",
                                        "{bc}consisting of many folds, coils, or convolutions {bc}{sx|winding|winding:2|}"
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "uros": [
            {
                "ure": "vo*lu*mi*nous*ly",
                "fl": "adverb"
            },
            {
                "ure": "vo*lu*mi*nous*ness",
                "fl": "noun"
            }
        ],
        "et": [
            [
                "text",
                "Late Latin {it}voluminosus{/it}, from Latin {it}volumin-, volumen{/it}"
            ]
        ],
        "date": "1611{ds||3||}",
        "shortdef": [
            "having or marked by great volume or bulk : large; also : full",
            "numerous",
            "filling or capable of filling a large volume or several volumes"
        ]
    }
]
## Wireframes




MVP
My MVP will involve having a search bar that allows the user to access the complete OwlBot dictionary API and look up any word from the site. Upon selecting the word, the page will redirect to a the word's definition on a new component called defintion.js..

MVP EXAMPLE:
Find and use external api
Render data on page
Allow user to choose favorites
Save their choices in firebase
Post-MVP
List any additional functionality you would like to implement once MVP has been reached.

PostMVP EXAMPLE:
Add user auth
React Component Hierarchy
Include an image of your component hierarchy that shows the data flow and architectural design of your app.

Components
Based on the initial logic defined in the previous section, try to breakdown the logic further into stateless/stateful components.

Component	Description	Type
Header	The Header receives props that render multiple nav titles and links	Functional
Main	This component houses multiple rendered views through React Router and controls data received from the initial API call in state	Class
Priority Matrix
Include an image of your Priority Matrix (X is time and Y is priority)

Timeframes
Timeframes are key in the development cycle. You have limited time to code and so much to accomplish! Look at all of your planned files and components, and all of the areas of development you are planning and give an estimate of how long each one will take to complete. It's always best to pad the time to account for the unknown, so be sure to add an additional hour or two to play it safe. As you progress, you can update the "Time Invested" column to keep track of your hours, but that number should turn into "Actual Time" by the presentation day. Also, put a winter-themed gif at the top of your readme before you pitch to show you read the instructions thoroughly.

Component	Priority	Estimated Time	Time Invested	Actual Time
Adding Form	H	3hrs	3.5hrs	3.5hrs
Working with API	H	3hrs	2.5hrs	2.5hrs
Total	H	6hrs	5hrs	5hrs
Project Schedule
This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are responsible for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding Saturday and Sunday.

Day	Deliverable	Status
Jan 24th	Project Pitch / Wireframes / Priority Matrix / Functional Components	Incomplete
Jan 27th	Core Application Structure (HTML, CSS, etc.)	Incomplete
Jan 28th	Pseudocode / actual code	Incomplete
Jan 29th	Initial Clickable Model	Incomplete
Jan 30th	MVP	Incomplete
Jan 31tst	Present	Incomplete
Additional Libraries
Use this section to list all supporting libraries and thier role in the project. React Router Dom and Axios should be listed here at the very least.

Issues and Resolutions
Use this section to list of all major issues you anticipate encountering during development and how you plan to tackle them. Be sure to update this section during development, documenting the actual resolutions you inacted, as well as any other unexpected obstacles you encountered along the way.

Code Snippet
Use this section to include a brief code snippet you are proud of, along with a brief description of why.

function reverse(string) {
	// here is the code to reverse a string of text
}
Change Log
Use this section to document what changes were made in your overall planning and the reasoning behind those changes.
