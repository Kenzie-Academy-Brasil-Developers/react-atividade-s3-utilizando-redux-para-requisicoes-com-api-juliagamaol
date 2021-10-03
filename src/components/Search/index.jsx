import './index.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addDigimonsThunk} from '../../store/modules/digimons/thunks'

export default function Search() {
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)

    const dispatch = useDispatch()
    
    const handleSearch = () =>{
        setError(false)
        dispatch(addDigimonsThunk(input,error))
        setInput('')
    }
    return (
        <>
            <h2>Procure pelo seu Digmon</h2>
            <div className="pesquisa">
                <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Procure seu Digimon"/>
                <button onClick={handleSearch}>Pesquisar</button>
            </div>
        </>
    )
}
