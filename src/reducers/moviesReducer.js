

export const moviesReducer = (state = {popular:[], newMovies:[], upcomingMovies:[],searched:[],} , action)=>{
    switch(action.type){
        case "FETCH_MOVIES":
            return{
                ...state,
                popular: action.payload.popular,
                newMovies: action.payload.newMovies,
                upcomingMovies: action.payload.upcomingMovies,
            }
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched,
            }
        case "CLEAR_SEARCHED":
            return{
                ...state,
                searched:[],
            }
        default:
            return {...state};
    }
}



