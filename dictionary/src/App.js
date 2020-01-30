import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import axios from 'axios'
// import Main from './components/Main'
import Search from './components/Search'
import SuggestedWords from './components/Search'
import Description from './components/Description'
import index from '.'
import './App.css'
import { getAllWords, getWord} from './services/api-helper';
import Header from './components/Header'
import Footer from './components/Footer'
import Word from './components/Word'

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
            <Word
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

        
      </Switch>  
     
      <Footer/>
    </div>
  );
}
}
  

export default App;
