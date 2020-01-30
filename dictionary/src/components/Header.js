import React from 'react'
import { NavLink } from 'react-router-dom'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import App from '../App'
import Description from './Description'

function Header (props){
    return (
        <div className="container">
        <NavLink to= '/'>
        <div className="header">
            <h1 className="header-title"
           >Dictionary</h1>
        </div>
        </NavLink>
        </div>
    )

}

export default Header 

