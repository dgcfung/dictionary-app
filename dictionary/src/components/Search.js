import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const Search = props => {
    //console.log(props)
    return (

        <div className="search-area">
            <form action="">
                {/* <h1>Search.js</h1> */}
                <label>
                    <input className="search-bar" placeholder="Enter Word..." type="search" results="0" value={props.searchInput} name="type-query" onChange={props.handleChange} />
                    <Link to={`/description/${props.searchInput}`}>
                        <button className="button" >Search</button>
                    </Link>
                </label>
                {/* <input type= "text" onChange={props.newWord} name ="type-query"/>
            <button className= "look-up-def" >Search</button> */}
                {/* add onClick, set wordQuery=, new event listener. */}
                {/* console.log(props.newWord) */}
                {/* add onSubmit to <form>, check passed value from app.js */}

            </form>
        </div>
    )
}

export default Search