import { useParams } from "react-router-dom";
const ShowPage =()=>{

    const{ showId }= useParams();
    console.log(showId);
return<h1>hello</h1>
}
export default ShowPage;