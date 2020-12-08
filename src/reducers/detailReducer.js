const initialState={
    movie:{},
    screen:{results:[]},
    video:{},
    isLoading:true,
    
}

export const detailReducer = (state=initialState, action) =>{
    switch (action.type){
        case "GET_DETAIL":
            return {
                ...state, 
                movie: action.payload.movie,
                screen: action.payload.screen,
                video: action.payload.video,
                isLoading:false
            }
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading:true,
            }
        default:
            return {...state}
    }
}