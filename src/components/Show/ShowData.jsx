

const ShowData =({name,image,rating,summary,geners})=>{

    return <div>
    
    <div>
        <img src={image ? image : 'notFound.png'}></img>
    </div>
    <h1>{name}</h1>
    <div>{ rating.average || "N/A"}</div>
     
    
    <div dangerouslySetInnerHTML={{__html: summary}}/>
    <div>
   <div>
         Genres :  {
               geners ? geners.map((geners)=>(
                 <p key={geners}>{geners}</p>
              )) : <p>N/A</p>
                    }
             </div>
        
       
    </div>
    
    </div>
    
    }
    
    export default ShowData;