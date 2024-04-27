import { SearchCard ,SearchImgWrapper} from "../commonStyle/SearchCard";

const ActorCard =({name,image,country,birthday,deathday,gender})=>{

return <SearchCard>
    <SearchImgWrapper>
    <img src={image} alt={name} />
    </SearchImgWrapper>
    <div>
    <h1>{name} {!!gender && `(${gender})`}</h1>
    <p>{country ? `Comes From ${country}`:null}</p>
     {!!birthday && <p>Born {birthday}</p>}
     
     <p>{deathday ? `Died ${deathday}` : ""}</p>
    
    </div>
    
</SearchCard>
    


}
export default ActorCard;