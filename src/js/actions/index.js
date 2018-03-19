import {video_list} from '../constants';
import {YOUTUBE_KEY} from '../config/youtubekey'
import axios from 'axios'
export function getVideos(query) {
    const fixed = 'https://www.googleapis.com/youtube/v3/search';
    let url = fixed + '?part=snippet' + '&maxResults=5' + '&q='+ query + '&key='+ YOUTUBE_KEY;
    return function (dispatch){	
		return axios.get(url).then(response=> {
		console.log('response is',response.data.items)
    	 dispatch({type:video_list,payload:response.data.items})
    	})
    }	
  }