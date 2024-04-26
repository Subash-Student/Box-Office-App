import { useStarredShow } from "../../lib/useStarredhow";
import ShowCard from "./ShowCard";




const Show = ({apiData})=>{
    
    // const[starredShow , dispatch ]=usePresistedValue(reducerFn,[],'starred');
    const[starredShow , dispatch ]=useStarredShow();

   
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
               isStarred ={starredShow.includes(data.show.id)}
               />
            ))
        }
    </div>

    
} 

export default Show;