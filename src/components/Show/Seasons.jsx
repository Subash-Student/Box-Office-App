const Seasons =(props)=>{


    const {Seasons} = props;
  
    return <div>
        <p>Total No Of Seasons : {Seasons.length}</p>
       
        <p>Total No Of Episodes :{''}
         {Seasons.reduce((sum, seasons) => sum + seasons.episodeOrder ,0)}
         </p>

         <div>
            {
                Seasons.map(Seasons =>(
                       <div key={Seasons.id}>
                        <p>Season : {Seasons.number} </p>
                        <p>No Of Episodes : {Seasons.episodeOrder}</p>

                        <div>
                            <p>Aired  : {Seasons.premiereDate}  -  {Seasons.endDate}</p>
                         </div>  
                        </div>
                    
                ))
            }
         </div>
    </div>
}
export default Seasons;