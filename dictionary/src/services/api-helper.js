import axios from 'axios'

const apiKey= `87d2992b-b381-4b38-83e5-f42244d14615`
const apiKeyThesaurus='b4f6a24f-2f2e-46d7-aea9-83bc3a3bc017'
const wordQuery=''
const base= `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${wordQuery}?key=`


export const getAllWords= async()=>{
    const response= await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${wordQuery}?key=${apiKey}`)
    return response
}

export const getWord= async(word)=>{
    const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${apiKey}`)
    return response
   
}

export const getThesaurus= async(word)=>{
    const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${apiKeyThesaurus}`)
    return response
}

