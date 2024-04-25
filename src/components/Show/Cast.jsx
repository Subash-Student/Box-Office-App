const Cast =({cast})=>{

    return <div>
         <h1>Cast</h1>
      {
       
          cast.map(cast =>(
            <div key={cast.person.id}>
              <img src={!!cast.person.image && cast.person.image.medium} alt={cast.person.name}/>
              <p>{cast.person.name}  |  {cast.character.name}   {cast.voice && ` |  VoiceOver`}</p>
            </div>
        ))
      }
    </div>
}
export default Cast;