import axios from 'axios'
import {movieDetailURL, movieScreenshotURL, movieVideoURL} from '../api'

export const loadDetail = (id) => async (dispatch) => {
    dispatch({
        type:"LOADING_DETAIL",
    })

    const detailData = await axios.get(movieDetailURL(id));
    const screenshotData= await axios.get(movieScreenshotURL(id));
    const videoData = await axios.get(movieVideoURL(id))

    dispatch({
        type: "GET_DETAIL",
        payload:{
            movie:detailData.data,
            screen: screenshotData.data,
            video: videoData.data,


        }
    })
}