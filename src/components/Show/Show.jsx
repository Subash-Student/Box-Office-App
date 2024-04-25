import ShowCard from "./ShowCard";
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

const Show = ({apiData})=>{
    
    const[starredShow , dispatch ]=usePresistedValue(reducerFn,[],'starred');

   
    const starMeClick = showId =>{

        console.log(showId)
        const isStarred = starredShow.includes(showId );
console.log(isStarred);
        if(isStarred){
            dispatch({type : "UNSTAR" , showId}) 
        }else{
            dispatch({type : "STAR" ,showId})
        }
       
    }
    console.log({starredShow});
    return <div>
        {
           apiData?.map(data =>(
               <ShowCard key={data.show.id} 
               name={data.show.name} 
               image={data.show.image ?data.show.image.medium : "/notFound.png" }
               summary={data.show.summary}
               id ={data.show.id}
               starMeClick ={starMeClick} 
               />
            ))
        }
    </div>

    
} 

export default Show;