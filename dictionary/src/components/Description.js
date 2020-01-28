import React from 'react'

function Description(props){
    console.log(props.match)
    console.log(props.parseDefinition && props.parseDefinition[0].shortdef[0])
    console.log(props.parseDefinition)
    console.log(props.newName)

    if(props.error){
        return(<h1>There is an error.</h1>)
    }
    return (
       
        <div>   
            {props.match.match.params.word}
            {/* <h1>{props.parseDefinition && props.parseDefinition}</h1> */}
            <h1>{props.name}</h1>
            {/* changing name */}
            <h1>{props.parseDefinition && props.parseDefinition[0].fl}</h1>
            {/* {props.parseDefinition && props.parseDefinition[0].fl.map((def)  => 
            <p>{def}</p>
            )} */}
            {props.parseDefinition && props.parseDefinition[0].shortdef.map((def)  => 
            <p>{def}</p>
            )}
    

        {/* <h1>{props.parseDefinition && props.parseDefinition[0].shortdef[0]}</h1> */}
        </div>
    )
}

export default Description