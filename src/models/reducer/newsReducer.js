import {GET_NEWS,NEWS_ERROR} from '../types'

const initialState = {
    news:[],
    // entertainment:[],
    // health:[],
    // science:[],
    loading:true
}

export default function newsReducer(state = initialState, action){
    switch(action.type){
        case GET_NEWS:
        return { ...state,news:action.payload,loading:false}
        // case  GET_NEWS_SCIENCE:
        //    return { ...state,science:action.payload,loading:false}
        // case GET_NEWS_ENTERTAINMENT:
        //     return { ...state,entertainment:action.payload,loading:false}   
        case NEWS_ERROR:
            return{ loading: false, error: action.payload }
        default: return state
    }

}


