import React, {useState, useEffect} from 'react'
import { getAllWords, getWord} from '../services/api-helper';


 class Description extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchedWord: null,
        } 
    }


    async componentDidMount(){
    // e.preventDefault()
    let word= await getWord(this.props.match.match.params.word);
    if (word.data.length > 0){
        this.setState({
        searchedWord: word.data
        })
    } else {
      this.setState({
        error: 'Word not found'
      })
    }}

    // console.log(this.props.name)

    // console.log(props.match)
    // console.log(props.parseDefinition && props.parseDefinition[0].shortdef[0])
    // console.log(props.parseDefinition)
    // console.log(props.newName)
    render(){

    if (this.state.error) {
        return(<h1>There is an error.</h1>)
    }

    return (
       
        <div>   
            {console.log(props.name)}
            {console.log(this.state.searchedWord && this.state.searchedWord)}
            {/* { console.log(this.state.searchedWord[0])} */}
            {/* <h1>{this.state.parseDefinition && this.state.parseDefinition[0].fl}</h1> */}
        
            <h1>{this.searchedWord && this.searchedWord}</h1>
            {/* <h1>{this.state.searchedword && this.state.searchedword[0].meta.id}</h1> */}
            <h1>{this.state.searchedWord && this.state.searchedWord[0].fl}</h1>
            {/* <h1>{seae}</h1> */}
            {/* changing name */}
            {/* <h1>{this.state.searchedWord && this.state.searchedWord[0].fl}</h1> */}
            {/* {this.state.searchedWord[0] && this.state.searchedWord[0].map((def)  => 
            <p>{def}</p>
            )}  */}
            {this.state.searchedWord && this.state.searchedWord[0].shortdef.map((def)  => 
                <p>{def}</p>
            )}
    

        {/* <h1>{props.parseDefinition && props.parseDefinition[0].shortdef[0]}</h1> */}
        </div>
    )
    }
 }

export default Description