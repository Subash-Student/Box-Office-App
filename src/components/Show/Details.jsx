const Details = ({status,premiered,network})=>{

    
    return <div>
        <h1>Details</h1>

        <div>
            <p>Status : {status} </p>
            <p>Premiered  {premiered} On {!!network && network.name}</p>
        </div>
    </div>
}

export default Details;