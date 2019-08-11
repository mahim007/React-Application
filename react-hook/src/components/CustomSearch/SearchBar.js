import React, {useEffect, useState} from 'react';
import useDebounce from './useDebounce';
import searchCharacter from './searchCharacters';

const SearchBar = () => {
    const [searchTerms, setSearchTerms] = useState('');
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const debouncedSearchTerm = useDebounce(searchTerms, 500);

    useEffect(() => {
        if (debouncedSearchTerm) {
            setIsSearching(true);
            searchCharacter(debouncedSearchTerm)
            .then(res =>{
                setIsSearching(false);
                setResults(res);
            });
        } else {
            setResults([]);
        }
    }, [debouncedSearchTerm]);

    return(
        <div>
            <input
            placeholder = 'Search Marvel Hero!'
            onChange = {e => {setSearchTerms(e.target.value)}}
            ></input>
            {isSearching && <div>Searching ...</div>}
            {
                results.map(result => {
                    return <div key={result.id}>
                        <h4>{result.title}</h4>
                        <img
                        src = {`${result.thumbnail.path}/portrait_incredible.${result.thumbnail.extension}`}
                        />
                    </div>
                })
            }
        </div>
    );
};
export default SearchBar;