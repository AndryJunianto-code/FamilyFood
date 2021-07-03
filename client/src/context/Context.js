import React,{useContext,useReducer} from 'react'
import Reducer from './Reducer'
const INITIAL_STATE = {
    user:  null,
    isFetching:false,
    error:false
}

export const AppContext = React.createContext(INITIAL_STATE);

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export const AppProvider = ({children})=> {
    const [state,dispatch] = useReducer(Reducer, INITIAL_STATE)
    return(
        <AppContext.Provider value={{
            user:state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </AppContext.Provider>
    )
}