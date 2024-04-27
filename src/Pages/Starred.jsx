import {  getShowByIds } from "../api/tvmaze";
import Show from "../components/Show/Show";
import {useQuery} from '@tanstack/react-query';

 import { useStarredShow } from "../lib/useStarredhow";
import { TextCenter } from "../components/commonStyle/TextCenter";

const Starred =()=>{

const [starredKey] = useStarredShow();

const { data:starredShows  , error:starredShowsError } = useQuery({
    queryKey: ['starredShow',starredKey],
    queryFn: () => getShowByIds(starredKey)
    .then(result =>
        result.map(show =>({show}))
    ), 
   refetchOnWindowFocus :false,
    
  })

if(starredShows>length > 0 ){
  return <Show apiData = {starredShows}/>
}

if(starredShows?.length === 0){
return <TextCenter>No Shows Are Starred </TextCenter>
}

if(starredShowsError){
  return <TextCenter>{starredShowsError.message}</TextCenter>
}
return <TextCenter>Data is Loading....</TextCenter>
}

export default Starred;