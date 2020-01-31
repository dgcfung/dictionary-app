# Dictionary-app

This project will create an interactive dictionary app based on the Merriam-Webster dictionary API. Please refer to the following link: https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=87d2992b-b381-4b38-83e5-f42244d14615. Because a plain dictionary may make for a boring user-experience and result in less return visits. I will add a scroll down menu to allow the user to select words based on the keywords entered. Furthermore, I will add styling. Pending time, constraints, I will also access a second API to access latest news/stock ticker/ or entertainment news.

API Snippet

<img width="1138" alt="screen shot 2020-01-24 at 11 15 53 am" src="https://media.git.generalassemb.ly/user/25138/files/ecaf8400-3e9b-11ea-8851-8478bef1256a">

## Wireframes

![image](https://media.git.generalassemb.ly/user/25138/files/e29b7e80-3eb7-11ea-90a5-1b83c96be4cc)

Home Page Appearance before query.

![image](https://media.git.generalassemb.ly/user/25138/files/f21ac780-3eb7-11ea-8ea3-00ba5fd1a4fc)

Page appearance after querty.

![image](https://media.git.generalassemb.ly/user/25138/files/01017a00-3eb8-11ea-9348-961f313f81c9)


MVP

- Accuess Meriam-Webster API
- Create searchbar for words
- Navigate to new component page upon click
- Render supporting to supporting components
- Home button navigating back to Home
- Parsing definition.


## Components: 
All comp
onents will be made in classes. MVP will have six components. 


Post-MVP

- Top priortiy: Searchbar will render suggestions based on input
- Priority: parsing images/antonyms/synonyms
- images, antonyms/synonyms from API -pending how many words have images
- Access second API for supplementary features-(news, stocks enteratainment, etc,)
- The second API can be searched for new news articles based on the keyword provided.
- CSS styling.



## Priority Matrix
![image](https://media.git.generalassemb.ly/user/25138/files/36f12f00-3eb5-11ea-8d0b-5491b8bde940)

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Complete wireframes and creation of repository. Project approval| Complete
|Jan 27th| Set up components and access API. | Complete
|Jan 28th| Parse data to page including post-MVP| Complete
|Jan 29th| Searchbar post MVP | Complete
|Jan 30th| Add CSS Styling & post-MVP| Complete
|Jan 31st| Presentation| Complete- last fixes on styling required.


## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App.js | M | 4hrs | 4 hrs| 1/30, 5:00pm|
| Access API | H | 4 hrs | 4 hrs| 1/25, 3:00pm|
| Build Searchbar | H | 8hrs| 
| Definition render, images, synonyms, antonyms| H | 4hrs| 
| Header.js| M | 2hrs| 2 hrs| 1/30, 1:00pm|
| Footer.js| M | 1hrs| .5 hrs| 1/29, 4:00pm|
| Search.js| H | 4 hrs| 6 hours| 1/28, 7:00pm|
| Wordjs| H | 8 hrs| 6 hrs| 1/28, 4:00pm|
| Search suggested results| H | 6 hrs| 6 hrs|5:30pm|
| Post-MVP: CSS| H | 8hrs| 14 hrs| 1/30, 2:00pm|
| Post-MVP: Second API| M| 4hrs| Task begun, but not completed|
Total: 53 hours.


Day	Deliverable	Status
Jan 24th	Project Pitch / Wireframes / Priority Matrix / Functional Components	Complete
Jan 27th	Build searchbar., API working	Complete
Jan 28th	Defintion render, header/footer	Complete
Jan 29th	Post/MVP:Suggest search results	Complete
Jan 30th	Post-MVP/CSS, 2nd API	Partially Complete
Jan 31tst	Present	Incomplete


## Additional Libraries

Will download Axios and  react-router-dom.

## Issues and Resolutions

Majority of issues should arise in mapping and getting the searchbar to work- with additional problems suggesting searches in Post-MVP.  Referencing state and updating state was difficult. Creating features did not take much time but getting them to connect and function together took majority of the time. Logging on the console, everywhere helped. Began attempting to implement a second thesaurus API due to  inconsistent key fields in the API. Eventually did not implement idea due to time constraints but considered solutions of finding a new API or creating my own JSON file to manually.  May later go back and add additional features.

## Code Snippet
 handleClick = async (e) => {
    e.preventDefault()

    this.setState = {
      isLoading: true,
    }
    let word = await getWord(this.state.searchInput);
    if (word.data.length > 0) {
      this.setState({
        searchedWord: word.data,
        isLoading: false
      })
    } else {
      this.setState({
        error: 'Word not found'
      })
    }
  }
}
## Change Log
Component structure was changed. Post-MVP componenet Thesaurus.js was begun but not completed. 

For completed project, see http://dictionary-app-donald.surge.sh/

![image](https://media.git.generalassemb.ly/user/25138/files/138b2000-439e-11ea-9bd2-db92d859905a)
