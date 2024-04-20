import { useState } from "react";
import { showdata } from "../api/tvmaze";


const Home =()=>{

    const [SearchStr , SetSearchStr] =useState("");
     const [apiData , setApiData] = useState([]);
     const [apiError , setApiError] = useState();

const searchHandler =(e)=>{
  SetSearchStr(e.target.value);

}

const submitHandler =async(ev)=>{
ev.preventDefault();

try {
    setApiError(null);
    const results = await showdata(SearchStr);
    setApiData(results);
} catch (error) {
    setApiError(error);
}


}

const renderApiData =()=>{
    if(apiError){
        return <div>Error Occured : {apiError.message}</div>
    }
  
    if(apiData){
       return apiData.map((data) => (
            <div key={data.show.id}>
                {data.show.name}
            </div>
        ))
    }
    
    return null;

}



return <div>
    <form onSubmit={submitHandler}>
        <input type="text" value={SearchStr}  onChange={searchHandler}/>
        <button type="submit">Search</button>
    </form>
<div>
 
  {renderApiData()}

</div>

</div>
}

export default Home;