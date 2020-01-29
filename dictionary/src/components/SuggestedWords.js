import React from 'react'

const SuggestedWords = props =>{
    console.log(props)
    return(
        <ul>
            <li>Suggested Words</li>

            {props.suggestedWords.map((suggestedWord, index)=> <li key={index}>{suggestedWord}</li>)}

        </ul>
    )

}

export default SuggestedWords


