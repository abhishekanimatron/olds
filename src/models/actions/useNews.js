import {GET_NEWS, NEWS_ERROR} from '../types'
import axios from 'axios'
import {TopUrl} from '../api/api'

export const getNews = () => async dispatch => {
    
    try{
        const res = await axios.get(`${TopUrl}`)
        dispatch( {
            type: GET_NEWS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: NEWS_ERROR,
            payload: error,
        })
    }

}
