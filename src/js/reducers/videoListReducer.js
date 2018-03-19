import {video_list} from '../constants'
export default function videoListReducer(state=[],action){
	switch(action.type){
		case video_list:
			console.log(action.payload)
			return [...state,action.payload]
	}
	return state
}