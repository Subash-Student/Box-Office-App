import { useState } from "react";
import { actordata, showdata } from "../api/tvmaze";
import Searchform from "../components/Searchform";
import Show from "../components/Show/Show";
import Actor from "../components/Actor/Actor";
import {useQuery} from '@tanstack/react-query'
import { useSearchStr} from "../lib/searchInput"
import { TextCenter } from "../components/commonStyle/TextCenter";




const Home =()=>{

    const [SearchStr , SetSearchStr] =useSearchStr();
    const [searchOption , setSearchOption] = useState("shows");

const searchHandler =(e)=>{
  SetSearchStr(e.target.value);
  

}
const searchOptionHandler =(ev)=>{

    setSearchOption(ev.target.value)
}

const [filter, setFilter] =useState(null)


const { data:apiData  , error:apiError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () => filter.searchOption === "shows"  ? showdata(filter.SearchStr) : actordata(filter.SearchStr),
   
    enabled: !!filter
  })

  
const submitHandler =async(ev)=>{
ev.preventDefault();

setFilter({SearchStr,searchOption});

}

const renderApiData =()=>{
    if(apiError){
        return <TextCenter>Error Occured : {apiError.message}</TextCenter>
    }
  
if(apiData?.length === 0){
      return <TextCenter>No Result Found</TextCenter>
}

    if(apiData){  
       return apiData[0].show ?  <Show apiData={apiData}/> : <Actor apiData={apiData}/>
    }
        
    
    return null;

}


return (
<div>
<Searchform
    submitHandler={submitHandler}
    searchOption={searchOption}
    searchHandler={searchHandler}
    SearchStr={SearchStr}
    renderApiData={renderApiData}
    searchOptionHandler={searchOptionHandler} />
    </div>
)
}
 

export default Home;