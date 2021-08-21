import {GET_NEWS,GET_NEWS_BUSINESS,GET_NEWS_TECHNOLOGY ,GET_NEWS_HEALTH, GET_NEWS_SCIENCE, GET_NEWS_SPORTS,GET_NEWS_ENTERTAINMENT, NEWS_ERROR}  from '../types'
import axios from 'axios'
import {TopUrl,BusinessUrl,TechUrl,SportUrl,HealthUrl,EntUrl,ScienceUrl} from '../api/api'

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

export const getNewsBusiness = () => async dispatch => {
    try{
        const res = await axios.get(`${BusinessUrl}`)
        dispatch( {
            type: GET_NEWS_BUSINESS,
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

export const getNewsTechnology = () => async dispatch => {
    try{
        const res = await axios.get(`${TechUrl}`)
        dispatch( {
            type: GET_NEWS_TECHNOLOGY,
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



export const getNewsSports = () => async dispatch => {
    try{
        const res = await axios.get(`${SportUrl}`)
        dispatch( {
            type:GET_NEWS_SPORTS,
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



export const getNewsHealth = () => async dispatch => {
    try{
        const res = await axios.get(`${HealthUrl}`)
        dispatch( {
            type:GET_NEWS_HEALTH,
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


export const getNewsScience = () => async dispatch => {
    try{
        const res = await axios.get(`${ScienceUrl}`)
        dispatch( {
            type:GET_NEWS_SCIENCE,
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


export const getNewsEnt = () => async dispatch => {
    try{
        const res = await axios.get(`${EntUrl}`)
        dispatch( {
            type:GET_NEWS_ENTERTAINMENT,
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