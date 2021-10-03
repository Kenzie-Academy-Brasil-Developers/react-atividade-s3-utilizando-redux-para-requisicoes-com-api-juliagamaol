import { ADD_DIGIMONS } from "./actionsTypes";

export default function digimonsReduce(state = [], action) {
    switch(action.type){
        case 'ADD_DIGIMONS':
            const{digimon} = action
            return[...state,digimon]
        default:
            return state
    }
}
