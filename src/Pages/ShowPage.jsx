import { useParams } from "react-router-dom";
import { getDataById } from "../api/tvmaze";
import {useQuery} from '@tanstack/react-query'



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
        return <h1>Data Loading From{showData.name}</h1>
    }

return



}
export default ShowPage;