import React from 'react'
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

    
    render(){
    if (this.state.error) {
        return(<h1>There is an error.</h1>)
    }

    console.log(this.state.searchedWord)
    
    return (
        <div>   
            <h1>{this.props.match.match.params.word}</h1>
            {/* <h1>{this.state.searchedWord && this.state.searchedWord[0].meta.id}</h1> */}
            <h1>{this.state.searchedWord && this.state.searchedWord[0].fl}</h1>

            {this.state.searchedWord && this.state.searchedWord[0].shortdef.map((def)  => 
                <p>{def}</p>
                // <Definition def={def}/>
            )}

        </div>
    )
    }
 }

export default Description