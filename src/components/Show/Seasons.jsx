import styled from 'styled-components';

const Seasons =(props)=>{


    const {Seasons} = props;
  
    return <SeasonsWrapper>
        <p>Total No Of Seasons : {Seasons.length}</p>
       
        <p>Total No Of Episodes :{''}
         {Seasons.reduce((sum, seasons) => sum + seasons.episodeOrder ,0)}
         </p>

         <SeasonList>
            {
                Seasons.map(Seasons =>(
                       <div key={Seasons.id} className='season-item'>
                        <div className='left'>
                        <p>Season : {Seasons.number} </p>
                        <p>No Of Episodes : {Seasons.episodeOrder}</p>
                        </div>
                    
                        <div className='right'>
                            <p>Aired  :  <strong>{Seasons.premiereDate}  -  {Seasons.endDate}</strong> </p>
                         </div>  
                        </div>
                    
                ))
            }
         </SeasonList>
    </SeasonsWrapper>
}
export default Seasons;

const SeasonsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;

const SeasonList = styled.div`
  display: flex;
  flex-direction: column;
  .season-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    &:last-child {
      margin-bottom: 0;
    }
    .left {
      flex: 0 0 30%;
      border-right: 1px solid #b0b0b0;
      padding-right: 20px;
    }
    .right {
      padding-left: 20px;
      flex: 1;
    }
  }
`;