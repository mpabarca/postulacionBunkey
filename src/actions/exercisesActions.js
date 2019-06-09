import {ADD_EXERCISE, SHOW_EXERCISE} from './types';

export const addExercises=(exercise)=>{
    return{
        type:ADD_EXERCISE,
        payload:exercise
    }
}
export const showExercise=()=>{
    return{
        type:SHOW_EXERCISE
    }
}