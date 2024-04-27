import { useState,useEffect } from "react";



const usePresistedValue = (initialState,sessionKey)=>{

    const [state,setState] = useState(()=>{

        const PresistedValue =sessionStorage.getItem(sessionKey);

        return PresistedValue? JSON.parse(PresistedValue) : initialState;
    });

    useEffect(()=>{
        sessionStorage.setItem(sessionKey, JSON.stringify(state))
    },[state,sessionKey])

    return[state,setState]
}

export const useSearchStr = ()=>{
    return usePresistedValue("",'search')
}

