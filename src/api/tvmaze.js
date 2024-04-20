

const apiGet = async(searchStr)=>{

    const url = `https://api.tvmaze.com/search/shows?q=${searchStr}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export const showdata = (searchStr)=> apiGet(searchStr);