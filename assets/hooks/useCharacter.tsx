import axios from "axios"
import { useState,useEffect } from "react"
export type characterType={
    id:number,
    name:string,
    image:string
  }
  
export const useCharacter=():null|characterType[]=>{
    const [characters,setCharacters]=useState<null|characterType[]>([])
  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character')
    .then(res=>setCharacters(res.data.results))
  },[characters])
  return characters
}
