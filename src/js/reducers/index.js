import {combineReducers} from 'redux';
import videoListReducer from './videoListReducer'

const rootReducers=combineReducers({
	videoList:videoListReducer
})

export default rootReducers