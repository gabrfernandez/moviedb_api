import axios from 'axios'
import {movieDetailURL, movieScreenshotURL} from '../api'

export const loadDetail = (id) => async (dispatch) => {
    dispatch({
        type:"LOADING_DETAIL",
    })

    const detailData = await axios.get(movieDetailURL(id));
    const screenshotData= await axios.get(movieScreenshotURL(id));

    dispatch({
        type: "GET_DETAIL",
        payload:{
            movie:detailData.data.results,
            screen: screenshotData.data.results,
        }
    })
}