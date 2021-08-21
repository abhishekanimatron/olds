import { GET_NEWS_TECHNOLOGY ,NEWS_ERROR }  from '../types'

const initialState = {
    technology:[],
}

export default function TechnologyReducer(state = initialState, action){
    switch(action.type){
        case GET_NEWS_TECHNOLOGY:
          return { ...state,technology:action.payload,loading:false}
            case NEWS_ERROR:
            return{ loading: false, error: action.payload }
        default: return state
    }
}