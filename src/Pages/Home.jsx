import { useState } from "react";
import { actordata, showdata } from "../api/tvmaze";
import Searchform from "../components/Searchform";
import Show from "../components/Show/Show";
import Actor from "../components/Actor/Actor";


const Home =()=>{

    const [SearchStr , SetSearchStr] =useState("");
     const [apiData , setApiData] = useState(null);
     const [apiError , setApiError] = useState();
     const [searchOption , setSearchOption] = useState("shows");

const searchHandler =(e)=>{
  SetSearchStr(e.target.value);

}
const searchOptionHandler =(ev)=>{

    setSearchOption(ev.target.value)
}




const submitHandler =async(ev)=>{
ev.preventDefault();

try {
    setApiError(null);
    if(searchOption === "shows"){
        const results = await showdata(SearchStr,searchOption);
        setApiData(results);
    }else{
        const results = await actordata(SearchStr,searchOption);
        setApiData(results);
    }
    
    
} catch (error) {
    setApiError(error);
}


}

const renderApiData =()=>{
    if(apiError){
        return <div>Error Occured : {apiError.message}</div>
    }
  
if(apiData?.length === 0){
      return <div>No Result Found</div>
}

    if(apiData){  
       return apiData[0].show ?  <Show apiData={apiData}/> : <Actor apiData={apiData}/>
    }
        
    
    return null;

}


return <Searchform 
submitHandler ={submitHandler} 
searchOption={searchOption}
searchHandler={searchHandler}
SearchStr={SearchStr} 
renderApiData={renderApiData}
searchOptionHandler={searchOptionHandler}/>

}

export default Home;