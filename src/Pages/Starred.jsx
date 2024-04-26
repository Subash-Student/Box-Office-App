import {  getShowByIds } from "../api/tvmaze";
import Show from "../components/Show/Show";
import {useQuery} from '@tanstack/react-query';

 import { useStarredShow } from "../lib/useStarredhow";

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
console.log({starredShows})
if(starredShows){
  return <Show apiData = {starredShows}/>
}

return <div>Data is Loading....</div>
}

export default Starred;