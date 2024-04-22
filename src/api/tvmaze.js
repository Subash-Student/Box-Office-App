

const apiGet = async(searchStr,searchOption)=>{

  
    const url = `https://api.tvmaze.com/search/${searchOption}?q=${searchStr}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export const showdata = (searchStr,searchOption)=> apiGet(searchStr,searchOption);

export const actordata = (searchStr,searchOption)=> apiGet(searchStr,searchOption);