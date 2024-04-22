import { useState } from "react";
import { actordata, showdata } from "../api/tvmaze";
import Searchform from "../components/Searchform";


const Home =()=>{

    const [SearchStr , SetSearchStr] =useState("");
     const [apiData , setApiData] = useState([]);
     const [apiError , setApiError] = useState();
     const [searchOption , setSearchOption] = useState("shows");

const searchHandler =(e)=>{
  SetSearchStr(e.target.value);

}
const searchOptionHandler =(ev)=>{

    setSearchOption(ev.target.value)
}
console.log(searchOption);
// console.log(apiData[0].show);


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
  
    if(apiData){
       return apiData[0].show ? apiData.map((data) => (
            <div key={data.show.id}>
                {data.show.name}
            </div>
        )) :
        apiData.map((data) => (
            <div key={data.people.id}>
                {data.people.name}
            </div>
        ))
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