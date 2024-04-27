import styled from 'styled-components';
const Details = ({status,premiered,network})=>{

    
    return <div>
        <h1>Details</h1>

        <DetailsWrapper>
            <p>Status    : {status} </p>
            <p>Premiered : {premiered}  {network? `On ${network.name}` : ""}</p>
        </DetailsWrapper>
    </div>
}

export default Details;

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;