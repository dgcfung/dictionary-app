import React from 'react'
import {getThesaurus} from '../services/api-helper'

class Thesaurus extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchedWord:null,
        }
    }

    async componentDidMount(){
        let word= await getThesaurus(this.props.match.match.params.word)
        console.log(word)
        this.setState({
            searchedWord: word
        })
        console.log(this.state.searchedWord)
    }

        render(){
            return(
                <div>
            
                    {/* <p>{this.props.match.match.params.word}</p> */}
                    {/* <p>{this.state.searchedWord && this.state.searchedWord.data.map(def=> <p>{def}</p>)} */}
                    {/* </p> */}
                
                
                </div>
            )
        }

}


export default Thesaurus

{/* {this.state.searchedWord && this.state.searchedWord[0].shortdef.map((def)  => 
    <p>{def}</p>
)} */}