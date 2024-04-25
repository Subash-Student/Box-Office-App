const Cast =({cast})=>{

    return <div>
      {
        cast.map(cast =>(
            <div key={cast.person.id}>
              <img src={!!cast.person.image && cast.person.image.medium} alt={cast.person.name}/>
              <p>{cast.person.name}  |  {cast.character.name}</p>
            </div>
        ))
      }
    </div>
}
export default Cast;