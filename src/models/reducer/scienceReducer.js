import {GET_NEWS_SCIENCE ,NEWS_ERROR }  from '../types'

const initialState = {
   science:[],
}

export default function ScienceReducer(state = initialState, action){
    switch(action.type){
        case GET_NEWS_SCIENCE:
         return { ...state,science:action.payload,loading:false}   
            case NEWS_ERROR:
            return{ loading: false, error: action.payload }
        default: return state

    }
}