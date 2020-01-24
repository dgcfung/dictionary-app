# Dictionary-app

This project will create an interactive dictionary app based on the Merriam-Webster dictionary API. Please refer to the following link: https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=87d2992b-b381-4b38-83e5-f42244d14615. Because a plain dictionary may make for a boring user-experience and result in less return visits. I will add a scroll down menu to allow the user to select words based on the keywords entered. Furthermore, I will add styling. Pending time, constraints, I will also access a second API to access latest news/stock ticker/ or entertainment news.

API Snippet

<img width="1138" alt="screen shot 2020-01-24 at 11 15 53 am" src="https://media.git.generalassemb.ly/user/25138/files/ecaf8400-3e9b-11ea-8851-8478bef1256a">

## Wireframes

<img width="615" alt="screen shot 2020-01-24 at 10 27 15 am" src="https://media.git.generalassemb.ly/user/25138/files/0650cb80-3e9c-11ea-8cae-76cd0bd11615">


MVP

-Access Meriam-Webster API
-Create searchbar for words.
-Navigate to new component page upon click.
- Render supporting two supporting details
-Home button navigating back to Home

Post-MVP

- Top priortiy: Searchbar will render suggestions based on input
- images, antonyms/synonyms from API -pending how many words have images
- Access second API for supplementary features-(news, stocks enteratainment, etc,)
- The second API can be searched for new news articles based on the keyword provided.
- CSS styling.

Components
See Wireframing above. MVP will have six components.

App- Organizes and manages page rendering of page components of header, search, footer, and post MVP features.
Header- App title and back to home button
Main- Will handle majority of the function of page rendering the definition
Search- will manage the onclick search.
Images- will manage rendering of picture.
Footer- Only for design purposes.

I will use functional components during this project. All components will use functions.


Priority Matrix
Include an image of your Priority Matrix (X is time and Y is priority)

![img_1716](https://media.git.generalassemb.ly/user/25138/files/ac9ed000-3ea0-11ea-9d2e-0268501f892d)

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Complete wireframes and creation of repository. Project approval| Incomplete
|Jan 27th| Set up components and access API. | Incomplete
|Jan 28th| Parse data to page including post-MVP| Incomplete
|Jan 29th| Searchbar post MVP | Incomplete
|Jan 30th| Add CSS Styling & post-MVP| Incomplete
|Jan 31st| Presentation| inComplete- last fixes on styling required.


Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App.js | M | 4hrs |
| Access API | H | 4 hrs |
| Build Searchbar | H | 8hrs| 
| Definition render| H | 4hrs| 
| Header.js| M | 2hrs|
| Footer.js| M | 1hrs|
| Search.js| H | 4 hrs|
| Main.js| H | 8 hrs|
| Search suggested results| H | 6 hrs|
| Post-MVP: CSS| H | 8hrs|
| Post-MVP: Second API| M| 4hrs|
Total: 53 hours.


## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Setup App.js | H | 4hrs |
| Access API  | H | 4hrs |
| Build Searchbar | H | 8hrs| 
| Main.js| H | 8 hrs| 
| Definition Render| H | 4hrs| 
| Header.js| H | 2hrs| 
| Footer.js| H | 4hrs| 
| Post-MVP: SearchBar suggested| H | 6 hrs|
| Post-MVP: CSS mouseovers| H | 4hrs|

Day	Deliverable	Status
Jan 24th	Project Pitch / Wireframes / Priority Matrix / Functional Components	Incomplete
Jan 27th	Build searchbar., API working	Incomplete
Jan 28th	Defintion render, header/footer	Incomplete
Jan 29th	Post/MVP:Suggest search results	Incomplete
Jan 30th	Post-MVP/CSS, 2nd API	Incomplete
Jan 31tst	Present	Incomplete


Additional Libraries
Use this section to list all supporting libraries and thier role in the project. React Router Dom and Axios should be listed here at the very least.

Will download Axios and  react-router-dom.

Issues and Resolutions

Majority of issues should arise in mapping and getting the searchbar to work- with additional problems suggesting searches in Post-MVP.

Code Snippet
Use this section to include a brief code snippet you are proud of, along with a brief description of why.

function reverse(string) {
	// here is the code to reverse a string of text
}
Change Log
Use this section to document what changes were made in your overall planning and the reasoning behind those changes.
