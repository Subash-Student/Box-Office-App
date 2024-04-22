const Searchform =({submitHandler,searchOption,searchHandler,SearchStr,renderApiData,searchOptionHandler})=>{


    return <div>
    <form onSubmit={submitHandler}>
        <input type="text" value={SearchStr}  onChange={searchHandler}/>
        <button type="submit">Search</button>

    <label>
      <input type="radio" name="search-option" value="shows" checked ={searchOption === "shows"} onChange={searchOptionHandler} />Show
    </label>
    
    <label>
      <input type="radio" name="search-option" value="people" checked ={searchOption === "people"} onChange={searchOptionHandler} />Actor
    </label>

    




    </form>
<div>
 
  {renderApiData()}

</div>

</div>
}

export default Searchform;