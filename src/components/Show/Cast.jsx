import styled from 'styled-components';

const Cast =({cast})=>{

    return <CastList>
    
      {
       
          cast.map(cast =>(
            <div key={cast.person.id} className='cast-item'>
              <div className='pic-wrapper'>
              <img src={!!cast.person.image && cast.person.image.medium} alt={cast.person.name}/>
              </div>
              
              <p className='actor'>{cast.person.name}  |  {cast.character.name}   {cast.voice && ` |  VoiceOver`}</p>
            </div>
        ))
      }
    </CastList>
}
export default Cast;

const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  .cast-item {
    flex: 1 0 50%;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    @media only screen and (max-width: 768px) {
      flex: 1 0 100%;
    }
  }
  .pic-wrapper {
    width: 50px;
    min-width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .actor {
    margin-left: 25px;
  }
`;