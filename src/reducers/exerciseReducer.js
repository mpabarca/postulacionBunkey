import {ADD_EXERCISE, SHOW_EXERCISE} from '../actions/types';

const initialState = {
    exercises: []
}

export default function (state=initialState, action){
    switch(action.type){
        case ADD_EXERCISE:
            return{
                ...state,
                exercises:[...state.exercises,action.payload]
            }
        case SHOW_EXERCISE:
            return{
                ...state
            }
        default:
            return state
    }
}