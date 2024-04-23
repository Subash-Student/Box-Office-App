const ActorCard =({name,image,country,birthday,deathday,gender})=>{

return <div>
    <div>
    <img src={image} alt={name} />
    </div>
    <div>
    <h3>{name} {!!gender && `(${gender})`}</h3>
    <p>{country ? `Comes From ${country}`:null}</p>
     {!!birthday && <p>Born {birthday}</p>}
     
     <p>{deathday ? `Died ${deathday}` : `Alive`}</p>
    
    </div>
    
</div>


}
export default ActorCard;