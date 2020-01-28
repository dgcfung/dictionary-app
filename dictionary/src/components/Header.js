import React from 'react'
import { NavLink } from 'react-router-dom'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import App from '../App'
import Description from './Description'

function Header (props){
    return (
        <div>
            <NavLink to= '/'>Home</NavLink>
            <h1>Dictionary</h1>
        </div>
    )

}

export default Header 