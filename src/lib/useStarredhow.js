import { useEffect, useReducer } from "react";

const usePresistedValue =(reducer,initialState,key)=>{
    const [state , dispatchState] = useReducer(reducerFn,initialState,initial =>{
    
        const PresistedValue = localStorage.getItem(key);

        return PresistedValue? JSON.parse(PresistedValue) : initial;

    });
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state))
    },[state,key])
return [state,dispatchState]
}



const reducerFn =(starredShow , action)=>{

    switch (action.type){
        case "STAR":
         return starredShow.concat(action.showId);
        case "UNSTAR":
            return starredShow.filter(showId => showId !== action.showId)
    }
       

}

export const useStarredShow =()=>{

    return usePresistedValue(reducerFn,[],'starred');
}