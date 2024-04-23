import ShowCard from "./ShowCard";

const Show = ({apiData})=>{
    
    return <div>
        {
           apiData?.map(data =>(
               <ShowCard key={data.show.id} 
               name={data.show.name} 
               image={data.show.image ?data.show.image.medium : "/notFound.png" }
               summary={data.show.summary}
               id ={data.show.id} />
            ))
        }
    </div>

    
} 

export default Show;