import {GET_NEWS_HEALTH ,NEWS_ERROR }  from '../types'

const initialState = {
   health:[],
}

export default function HealthReducer(state = initialState, action){
    switch(action.type){
        case GET_NEWS_HEALTH:
           return { ...state,health:action.payload,loading:false}
            case NEWS_ERROR:
            return{ loading: false, error: action.payload }
        default: return state

    }
}