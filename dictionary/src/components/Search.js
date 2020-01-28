import React, {Component}from 'react'
import Axios from 'axios'

const Search = props => {
    //console.log(props)
    return(
        
        <form action="">
            <h1>Search.js</h1>
            <label>
            Enter Word:
            <input type= "text" name= "type-query" onChange= {props.handleChange} />
            <button className= "look-up-def" onClick= {props.handleClick} >Search</button>
            </label>
            {/* <input type= "text" onChange={props.newWord} name ="type-query"/>
            <button className= "look-up-def" >Search</button> */}
            {/* add onClick, set wordQuery=, new event listener. */}
            {/* console.log(props.newWord) */}
            {/* add onSubmit to <form>, check passed value from app.js */}
            
        </form>
        
    )
}

export default Search