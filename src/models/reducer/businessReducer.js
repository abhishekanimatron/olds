import { GET_NEWS_BUSINESS ,NEWS_ERROR }  from '../types'

const initialState = {
   business:[],
}

export default function BusinessReducer(state = initialState, action){
    switch(action.type){
        case GET_NEWS_BUSINESS:
            return { ...state,business:action.payload,loading:false}
            case NEWS_ERROR:
            return{ loading: false, error: action.payload }
        default: return state

    }
}