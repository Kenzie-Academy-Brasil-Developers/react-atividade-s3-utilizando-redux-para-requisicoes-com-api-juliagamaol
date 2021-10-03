import './index.css'
import { useSelector } from "react-redux"

export default function Digimons() {
    const digimons = useSelector(state => state.digimons)
    return (
        <>
            <ul>
                {digimons.map((item,index)=>{
                    return(
                        <li>
                            <h3>{item.name}</h3>
                            <img src={item.img} alt="img"/>
                        </li>
                    )
                })}
            </ul>
            
        </>
    )
}
