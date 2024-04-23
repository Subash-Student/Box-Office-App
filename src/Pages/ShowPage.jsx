import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataById } from "../api/tvmaze";
const ShowPage =()=>{

    const{ showId }= useParams();
    const [showData , setShowData] = useState(null);
    const [showError , setShowError] = useState(null);

    useEffect(() => {

        async function fetchData() {
          try {
            const data = await getDataById(showId);
            setShowData(data);
            console.log(showData);
          } catch (error) {
            setShowError(error);
          }

        }

        fetchData();
       
      }, [showId]);

      if(showError){
        return <h1>Failed to Fetch Data From {showData.name}</h1>
    }
    if(showData){
        return <h1>Data Loading From{showData.name}</h1>
    }

return



}
export default ShowPage;