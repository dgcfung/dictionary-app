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
        // sends props down to description for parsing. Thesaurus may be later expansion of page.
    )

}

export default Word