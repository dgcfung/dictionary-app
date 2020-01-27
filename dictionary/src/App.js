import React, {Component} from 'react';
import {Switch, Route, Link } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import Main from './components/Main'
import Search from './components/Search'
import SuggestedWords from './components/Search'
import Description from './components/Description'
import index from '.'

class App extends React.Component {
constructor(){
  super()
  this.state={
    words:[],
    filterValue:''
    }
    this.handleFilterChange= this.handleFilterChange.bind(this)
  }

handleFilterChange(event){
  event.preventDefault()
  const FilterValue= event.currentTarget.value
  const lowerCaseFilterValue=  FilterValue.toLowerCase()

  this.setState(() => {
      const suggestedWords = this.state.toLowerCaseFilterValue.filter(lowerCaseFilterValue=> lowerCaseFilterValue.includes(lowerCaseFilterValue))
      console.log(FilterValue)
  

      return{
      words: suggestedWords,
      filterValue: lowerCaseFilterValue
      
    }
})
}



fetchDictionary = async()=>{
  const wordQuery = ''
  const response= await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${wordQuery}?key=87d2992b-b381-4b38-83e5-f42244d14615`)
  const call= response.data
  this.setState({
    words: call
  })
  // console.log(this.state.words('hello'))
}

componentDidMount(){
  console.log(this.props)
  this.fetchDictionary()
}

render(){
  console.log(this.state.words)
  return (
    <div className="App">
      {/* // <Search OnChange={this.state.filterValue}/> */}
      <Search newSearch= {this.state.filterValue} onChange= {this.handleFilterChange}/>
      <SuggestedWords suggestedWords={this.state.words}/>
      <Description definition= {this.state.words}
      
      {/* <newSearc type= "text" value= {this.state.words} onChange={this.handleFilterChange.bind(this)}/> */}
    </div>
  );
}
}
  

export default App;
