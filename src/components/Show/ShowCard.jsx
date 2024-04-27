import styled from 'styled-components';
import { SearchCard, SearchImgWrapper } from '../commonStyle/SearchCard';
import { StarIcon } from '../commonStyle/StarIcon';




const ShowCard = ({name,image,summary,id,starMeClick,isStarred})=>{

   

    

  const summaryStripped = summary ? summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g, "") + "..." :"No Description";
  

    return <SearchCard>
        <SearchImgWrapper>
            <img src={image} />
           
        </SearchImgWrapper>
        <div>
        <h3>{name}</h3>
        <p>{summaryStripped}</p>
        </div>
        <ActionSection>
            <a href={`/show/${id}`} target="__blank" rel="noreferrer"> Show More...</a>
            <StarBtn  type="button" onClick={()=> starMeClick(id)} className={isStarred && "animate"}>
                <StarIcon active ={isStarred}/></StarBtn>
        </ActionSection>
        
    </SearchCard>
}
export default ShowCard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;