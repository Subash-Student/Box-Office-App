const BASE_url = 'https://api.tvmaze.com';

const apiGet = async(REM_URL)=>{

    const url = `${BASE_url}${REM_URL}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export const showdata = (searchStr)=> apiGet(`/search/shows?q=${searchStr}`);

export const actordata = (searchStr)=> apiGet(`/search/people?q=${searchStr}`);

export const getDataById = (showId)=> apiGet (`/shows/${showId}?embed[]=seasons&embed[]=cast`)
