import {GET_NEWS_ENTERTAINMENT ,NEWS_ERROR }  from '../types'

const initialState = {
   entertainment:[],
}

export default function EntertainmentReducer(state = initialState, action){
    switch(action.type){
        case GET_NEWS_ENTERTAINMENT:
         return { ...state,entertainment:action.payload,loading:false}   
            case NEWS_ERROR:
            return{ loading: false, error: action.payload }
        default: return state

    }
}