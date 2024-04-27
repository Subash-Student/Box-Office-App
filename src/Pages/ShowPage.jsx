import { useParams,Link } from "react-router-dom";
import { getDataById } from "../api/tvmaze";
import {useQuery} from '@tanstack/react-query'
 import ShowData from "../components/Show/ShowData";
import Details from "../components/Show/Details";
import Seasons from "../components/Show/Seasons";
import Cast from "../components/Show/Cast";
import styled from 'styled-components';
import { TextCenter } from "../components/commonStyle/TextCenter";



const ShowPage =()=>{

  const{ showId }= useParams();
 
const  {data :showData, error:showError}= useQuery({
  queryKey: ['showId',showId],
  queryFn: () => getDataById(showId),
})

      if(showError){
        return <TextCenter>Failed To Fetch Data</TextCenter>
    }
    if(showData){

     
     return  <ShowPageWrapper>
 
    <BackHomeWrapper>
      <Link to ="/">Go To Home Page...</Link>
    </BackHomeWrapper>
     
       <ShowData
         name={showData.name}
         image={showData.image.original}
         rating={showData.rating}
         summary={showData.summary}
         geners={showData.genres} />
     
     
        <InfoBlock>
         <Details status ={showData.status} premiered ={showData.premiered} network ={showData.network}/>
       </InfoBlock>

       <InfoBlock>
        <h2>Seasons</h2>
        <Seasons Seasons ={!!showData._embedded && showData._embedded.seasons} />
       </InfoBlock>

       <InfoBlock>
        <h2>Cast</h2>
        <Cast cast = {!!showData && showData._embedded.cast} />
       </InfoBlock>
       
       </ShowPageWrapper>
    }

return <TextCenter>Data Is Loading...</TextCenter>



}
export default ShowPage;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;