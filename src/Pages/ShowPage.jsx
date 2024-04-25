import { useParams } from "react-router-dom";
import { getDataById } from "../api/tvmaze";
import {useQuery} from '@tanstack/react-query'
 import ShowData from "../components/Show/ShowData";
import Details from "../components/Show/Details";
import Seasons from "../components/Show/Seasons";
import Cast from "../components/Show/Cast";




const ShowPage =()=>{

  const{ showId }= useParams();
 
const  {data :showData, error:showError}= useQuery({
  queryKey: ['showId',showId],
  queryFn: () => getDataById(showId),
})

      if(showError){
        return <h1>Failed To Fetch Data</h1>
    }
    if(showData){
    
     return  <><div>
       <ShowData
         name={showData.name}
         image={showData.image.original}
         rating={showData.rating}
         summary={showData.summary}
         geners={showData.genres} />
     </div>

        <div>
         <Details status ={showData.status} premiered ={showData.premiered} network ={showData.network}/>
       </div>

       <div>
        <h1>Seasons</h1>
        <Seasons Seasons ={!!showData._embedded && showData._embedded.seasons} />
       </div>

       <div>
        <h1>Cast</h1>
        <Cast cast = {!!showData && showData._embedded.cast} />
       </div>
       </>
       
    }

return



}
export default ShowPage;