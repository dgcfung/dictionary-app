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

                {/* takes props down from App.js, originally written onclick to call API for data. Eventually needed to re-organize code for purpose of implementing routes. */}
        

            </form>
        </div>
    )
}

export default Search