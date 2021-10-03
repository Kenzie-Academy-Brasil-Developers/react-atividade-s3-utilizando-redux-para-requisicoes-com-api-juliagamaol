import axios from "axios";
import {addDigimons} from './actions'

export const addDigimonsThunk = (digimon) => dispatch => {
    
    axios.get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
    .then((response)=>{
        dispatch(addDigimons({name:response.data[0].name,img:response.data[0].img}))
        
    })
    .catch((err)=>alert('digimon inexistente'))
}