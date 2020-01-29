import React from 'react'
import Description from './Description'
import Thersaurus from './Thesaurus'

function Word(props){
    return(
        <div>
            <Description 
                error={props.error} 
                match={props.match}
                parseDefinition={props.searchedWord} 
                name={props.searchInput} 
                newName= {props.searchedWord}
            />
            <Thersaurus
                error={props.error} 
                match={props.match}
                parseDefinition={props.searchedWord} 
                name={props.searchInput} 
                newName= {props.searchedWord}
            />
        </div>
    )

}

export default Word