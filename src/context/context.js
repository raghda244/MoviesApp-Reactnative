import { createContext, useReducer} from 'react'
import { MovieReducer } from '../reducers/movies-reducer';
export const MoviesContext=createContext();
export default MoviesProvider =({children})=>{
    const [ state, dispatch ] = useReducer(MovieReducer, {
        list:[],
        details:{}
     });
    return(
        <MoviesContext.Provider value={{state,dispatch}}>
            {children}
        </MoviesContext.Provider>
    )
}