import React, {Component}from 'react'
import Axios from 'axios'

const Search = props => {
    return(
        
        <form action="">
            <h1>Search.js</h1>
            <label>
            Enter Word:
            <input type= "text" name= "type-query"/>
            </label>
            <input type= "text" onChange={props.newWord} name ="type-query"/>
            <button className= "look-up-def" >Search</button>
            {/* add onClick, set wordQuery=, new event listener. */}
            {/* console.log(props.newWord) */}
            {/* add onSubmit to <form>, check passed value from app.js */}
            
        </form>
        
    )
}

export default Search