import styled from 'styled-components'

const Searchform =({submitHandler,searchOption,searchHandler,SearchStr,renderApiData,searchOptionHandler})=>{


    return <div>
    <form onSubmit={submitHandler}>
        <input type="text" value={SearchStr} 
         onChange={searchHandler}/>
        

    <StyledRadio>
      <input type="radio" 
      name="search-option"
       value="shows"
        checked ={searchOption === "shows"} 
        onChange={searchOptionHandler} />
        <span />Show
    </StyledRadio>
    
    <StyledRadio>
      <input type="radio"
       name="search-option" 
       value="people" 
       checked ={searchOption === "people"}
        onChange={searchOptionHandler}
         />
         <span />Actor
    </StyledRadio>

    <button type="submit">Search</button>




    </form>
<div>
 
  {renderApiData()}

</div>

</div>
}

export default Searchform;

const StyledRadio = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 13px;
  user-select: none;
  font-weight: 700;
  line-height: 1.65;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    border: 2px;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.mainColors.blue};
    border-radius: 50%;
  }
  input:checked ~ span {
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.mainColors.blue};
  }
  span:after {
    content: '';
    position: absolute;
    display: none;
  }
  input:checked ~ span:after {
    display: block;
  }
  span:after {
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.mainColors.blue};
  }
`;