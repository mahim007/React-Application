import React from 'react';

const searchCharacters = (searchKey) => {
    const apiKey = 'f9dfb1e8d466d36c27850bedd2047687';
    const queryString = `apikey=${apiKey}&=${searchKey}`;
    const URL = 'https://gateway.marvel.com/v1/public/comics?' + queryString;
    const options = {
        method: 'GET'
    };
    return fetch(URL, options)
    .then(result => result.json())
    .then(result => result.data.result)
    .catch(e => {
        console.log(e);
        return [];
    })
};

export default searchCharacters;