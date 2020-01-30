import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
// import Main from './components/Main'
import Search from './components/Search'
import SuggestedWords from './components/Search'
import Description from './components/Description'
import index from '.'
import './App.css'
import { getAllWords, getWord } from './services/api-helper';
import Header from './components/Header'
import Footer from './components/Footer'
import Word from './components/Word'
import Loading from './components/Loading'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      words: [],
      searchedWord: null,
      searchInput: '',
      isLoading: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  // set initial state & variables + bind of the button.



  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      searchInput: value,
      error: null
    })
    // console.log(value)
  }
  // variable controls changing string the user types, not the object. cannot change state, is loading conditionally renders Loading page. 

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
  // send the functions down, not the object. cannot change state. on click, calls API, loads loading page before API call, and handles error if API search for wor fails.

  async componentDidMount() {
    let response = await getAllWords();
    //console.log('componentDidMount')
    this.setState({
      words: response.data
    })
  }


  render() {
    return (
      <div className="App">

        <Header />

{/* switch statement protescts routes in case of fail, will remain at default page. */}
        <Switch>

{/* ternary operator handles loading page, while page is loading, loads loading page. else sends props down to word which sends props to description for rendering.*/}
          <Route exact path="/description/:word"
            render={(match) =>
              this.state.isLoading
                ?
                <Loading />
                :
                <Word
                  error={this.state.error}
                  match={match}
                  parseDefinition={this.state.searchedWord}
                  name={this.state.searchInput}
                  newName={this.state.searchedWord}
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

        <Footer />
      </div>
    );
  }
}


export default App;
