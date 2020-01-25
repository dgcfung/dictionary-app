import React, {Component}from 'react'

const Search = props => {
    return(
        <form>
            <label>
            Enter Word:
            <input type= "text" name= "type-query"/>
            </label>
            <input type= "text" onChange={props.newWord} name ="type-query"/>
            
        </form>
    )
}

export default Search