import { FlexGrid } from "../commonStyle/FlecGrid";
import ActorCard from "./ActorCard";

const Actor = ({apiData})=>{
   
    return <FlexGrid>
        {
           apiData?.map(data =>(
                <ActorCard key={data.person.id} 
                name={data.person.name} 
                image={data.person.image ? data.person.image.medium : "/notFound.png"}
                country ={data.person.country? data.person.country.name : null}
                birthday ={data.person.birthday}
                deathday ={data.person.deathday}
                gender ={data.person.gender}
                />
            ))
        }
    </FlexGrid>
    }
    
    export default Actor;