

export const moviesReducer = (state = {} , action)=>{
    switch(action.type){
        case "FETCH_MOVIES":
            return{
                ...state,
                popular: action.payload.popular,
            }
        default:
            return state;
    }
}

