import { Link } from "react-router-dom";





const ShowCard = ({name,image,summary,id,starMeClick,isStarred})=>{

   

    

  const summaryStripped = summary ? summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g, "") :"No Description";
  

    return <div>
        <div>
            <img src={image} />
           
        </div>
        <div>
        <h3>{name}</h3>
        <p>{summaryStripped}</p>
        </div>
        <div>
           
            <Link to={`/show/${id}`}>Show More...</Link>
            <button type="button" onClick={()=> starMeClick(id)}>{isStarred? "Un Star Me" : "Star Me"}</button>
        </div>
        
    </div>
}
export default ShowCard;