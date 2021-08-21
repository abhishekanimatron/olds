import { combineReducers } from 'redux'
import newsReducer from './newsReducer'
import businessReducer from './businessReducer'
import technologyReducer from './technologyReducer'
import sportsReducer from './sportsReducer'
import scienceReducer from './scienceReducer'
import healthReducer from './healthReducer'
import enterReducer from './enterReducer'

export default combineReducers({
  newsList: newsReducer,
  businessList:businessReducer,
  technologyList:technologyReducer,
  sportsList:sportsReducer,
  scienceList:scienceReducer,
  healthList:healthReducer,
  entertainmentList:enterReducer,
})