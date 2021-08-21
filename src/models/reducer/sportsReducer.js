import { GET_NEWS_SPORTS ,NEWS_ERROR }  from '../types'

const initialState = {
    sports:[],
}

export default function sportsReducer(state = initialState, action){
    switch(action.type){
            case GET_NEWS_SPORTS:
             return { ...state,sports:action.payload,loading:false}
            case NEWS_ERROR:
            return{ loading: false, error: action.payload }
        default: return state
    }
}