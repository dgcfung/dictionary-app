import React from 'react'

function Description(props){
    console.log(props.parseDefinition && props.parseDefinition[0].shortdef[0])
    return (
        <div>   
        <h1>{props.parseDefinition && props.parseDefinition[0].shortdef[0]}</h1>
        </div>
    )
}

export default Description