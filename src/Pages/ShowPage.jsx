// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataById } from "../api/tvmaze";
import {useQuery} from '@tanstack/react-query'



const ShowPage =()=>{

  const{ showId }= useParams();
 
// const useFetchShowData=(showId)=>{

  
//   const [showData , setShowData] = useState(null);
//   const [showError , setShowError] = useState(null);

//   useEffect(() => {

//     async function fetchData() {
//       try {
//         const data = await getDataById(showId);
//         setShowData(data);
//         console.log(showData);
//       } catch (error) {
//         setShowError(error);
//       }

//     }

//     fetchData();
   
//   }, [showId]);

//   return ({showData,showError});
// }
    
// const {showData,showError} = useFetchShowData(showId);

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