import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import axios from 'axios'
import Main from './components/Main'
import Search from './components/Search'
import SuggestedWords from './components/Search'
import Description from './components/Description'
import index from '.'
import { getAllWords, getWord} from './services/api-helper';
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {
constructor(){
  super()
  this.state={
    words:[],
    searchedWord: null,
    searchInput:''
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleClick= this.handleClick.bind(this)
  }

// handleFilterChange(event){
//   event.preventDefault()
//   const FilterValue= event.currentTarget.value
//   const lowerCaseFilterValue=  FilterValue.toLowerCase()

//   this.setState(() => {
//       const suggestedWords = this.state.toLowerCaseFilterValue.filter(lowerCaseFilterValue=> lowerCaseFilterValue.includes(lowerCaseFilterValue))
//       console.log(FilterValue)
  

//       return{
//       words: suggestedWords,
//       searchedWord: null,
//       filterValue: lowerCaseFilterValue
      
//     }
// })
// }

// pass searched Input down and set it equal to dummy variable


// fetchDictionary = async()=>{
//   const wordQuery = ''
//   const response= await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${wordQuery}?key=87d2992b-b381-4b38-83e5-f42244d14615`)
//   const call= response.data
//   this.setState({
//     words: call
//   })
//   // console.log(this.state.words('hello'))
// }



handleChange=(e)=>{
  let value= e.target.value;
  this.setState({
    searchInput: value,
    error: null
  })
  // console.log(value)
}
// send the functions down, not the object. cannot change state

handleClick = async(e)=>{
  e.preventDefault()
  let word= await getWord(this.state.searchInput);
  if (word.data.length > 0){
  this.setState({
    searchedWord: word.data
  })
  } else {
    this.setState({
      error: 'Word not found'
    })
  }
}
// send the functions down, not the object. cannot change state

async componentDidMount(){
  let response= await getAllWords();
  //console.log('componentDidMount')
  this.setState({
    words: response.data
  })
  // console.log(response.data)
}


render(){
  
  //console.log(this.state.searchedWord)
  return (
    <div className="App">
      
      <Header/>
      <Switch>
        <Route exact path="/description/:word" 
          component={(match) => 
            <Description
              error={this.state.error} 
              match={match}
              parseDefinition={this.state.searchedWord} 
              name={this.state.searchInput} 
              newName= {this.state.searchedWord}
            />
          }
        />

        <Route exact path="/">
          <Search 
            handleChange={this.handleChange} 
            handleClick={this.handleClick}
            searchInput={this.state.searchInput}
          />
        </Route>

          {/* <Main handleChange= {this.handleChange}/> */}

        {/* <Redirect to="/"/> */}
        
      </Switch>  
      {/* // <Search OnChange={this.state.filterValue}/> */}
      {/* 
      <Description error={this.state.error} parseDefinition={this.state.searchedWord} name={this.state.searchInput} newName= {this.state.searchedWord}/> */}
      {/* <Main parseDefinition= {this.state.searchedWord}/> */}
      {/* <Description parseDefinition={} */}
      {/* <SuggestedWords suggestedWords={this.}/> */}
      {/* <Description definition= {this.state.words}/> */}
      
      {/* <newSearc type= "text" value= {this.state.words} onChange={this.handleFilterChange.bind(this)}/> */}
      <Footer/>
    </div>
  );
}
}
  

export default App;
