import React from 'react';
import {Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Axios from 'axios'
import Main from './components/Main'
import Search from './components/Search'
import Index from './index'

class App extends React.Component {
constructor(props){
  super(props)
  this.state={
    words:[],
    filterValue:''
  }

}

handleFilterChange(event){
  event.preventDefault()
  const FilterValue= event.currentTarget.value
  const lowerCaseFilterValue=  FilterValue.toLowerCase()

  this.setState(() => {
      const suggestedWords = this.state.words.filter(lowerCaseFilterValue=> words.includes(lowerCaseFilterValue))
      console.log(FilterValue)

      return{
      words: suggestedWords,
      filterValue: lowerCaseFilterValue
      
    }
  
    
}



fetchDictionary = async()=>{
  const wordQuery
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
      // <Search OnChange={this.state.filterValue}/>
    
    </div>
  );
}
}
  

export default App;
