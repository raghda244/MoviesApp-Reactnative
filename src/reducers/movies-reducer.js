export const MovieReducer=(state={},action)=>{
    switch(action.type){
        case "MOVIE_LIST":{
            return {...state,list:action.payload}
        }
        case "MOVIE_DETAILS":{
            return {...state,details:action.payload}            
        }
        case 'CLEAR_DETAILS':{
            return {...state,details:{}}
        }
        default:{
            return state;
        }
    }
}